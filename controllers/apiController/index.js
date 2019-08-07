const config = require("../../config");

var mongoose = require("mongoose");
const db = require("../../models");

const Moment = require("moment");
const axios = require("axios");
const imageRoot = "https://image.tmdb.org/t/p/w500";

mongoose.connect("mongodb://localhost/chatdb", { useNewUrlParser: true });

//DO not call unless you are prepared
const movieCompiler = async () => {
  let page = 1;
  let maxPage = 1000;
  let release_date_lower = 2010; //changeable when data is ready
  let release_date_current = Moment(Date.now()).format("YYYY/MM/DD");

  for (page; page<maxPage; page++) {

    let movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=dadbb348c7503427d5277348f42629dc&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${release_date_lower}&release_date.lte=${release_date_current}`

    let movieData = await axios.get(movieURL);
      
        // console.log(res.data);
        maxPage = movieData.data.total_pages
        // console.log(maxPage);
        
        let pageArray = movieData.data.results;

        // for (let i = 0; i < pageArray.length; i++) {
        let mongooseArray = await pageArray.map(page => {
          let mongooseObj = {}
          // movie_id
          mongooseObj.movie_id = page.id
          // title
          mongooseObj.title = page.title
          // poster_path
          mongooseObj.poster_path = page.poster_path ? imageRoot + page.poster_path : undefined
          // backdrop_path
          mongooseObj.backdrop_path = page.backdrop_path ? imageRoot + page.backdrop_path : undefined
          // release_date
          mongooseObj.release_date = page.release_date
          // vote_average
          mongooseObj.vote_average = page.vote_average
          // overview
          mongooseObj.overview = page.overview
          // runtime
          // revenue
          // tagline
          // genre
          // homepage
          // console.log(mongooseObj);
          return mongooseObj
        })
        console.log(mongooseArray);
        db.Movie.create(mongooseArray);
    }
}


// showCompiler();
// movieCompiler();

module.exports = {};