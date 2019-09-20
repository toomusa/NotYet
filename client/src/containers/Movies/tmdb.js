const axios = require("axios");

// API key v3 auth 
let movieName = "Lord of the Rings"
const apikey="?api_key=dadbb348c7503427d5277348f42629dc";
const APIreadAccessToken ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWRiYjM0OGM3NTAzNDI3ZDUyNzczNDhmNDI2MjlkYyIsInN1YiI6IjVkNDIwNWFmYjg3YWVjMTYwYTM5NjEwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.seGLApTL-KDbYofGsMsKmoUzTFPnUd5j74PknWdTBZo";
let query = "&query="+movieName.split(" ").join("%20");
let movieURL = "https://api.themoviedb.org/3/search/movie" + apikey + query + language;
let language = "&language=en-US"
axios.get(movieURL).then(
  (res) => {
    console.log(res.data);
  })
 
// request sent: https://api.themoviedb.org/3/search/movie?api_key=dadbb348c7503427d5277348f42629dc&query=lord%20of%20the%20rings
//Data object
let data =
{
    "page": 1,
    "total_results": 14,
    "total_pages": 1,
    "results": [
      {
        "vote_count": 14820,
        "id": 120,
        "video": false,
        "vote_average": 8.3,
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "popularity": 37.232,
        "poster_path": "/56zTpe2xvaA4alU51sRWPoKPYZy.jpg",
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Fellowship of the Ring",
        "genre_ids": [
          12,
          14,
          28
        ],
        "backdrop_path": "/pIUvQ9Ed35wlWhY2oU6OmwEsmzG.jpg",
        "adult": false,
        "overview": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
        "release_date": "2001-12-18"
      },
      {
        "vote_count": 13488,
        "id": 122,
        "video": false,
        "vote_average": 8.4,
        "title": "The Lord of the Rings: The Return of the King",
        "popularity": 31.678,
        "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Return of the King",
        "genre_ids": [
          12,
          14,
          28
        ],
        "backdrop_path": "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg",
        "adult": false,
        "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
        "release_date": "2003-12-01"
      },
      {
        "vote_count": 364,
        "id": 123,
        "video": false,
        "vote_average": 6.5,
        "title": "The Lord of the Rings",
        "popularity": 10.909,
        "poster_path": "/1l3WpoF7TX9pOprX4XepCXjQXUV.jpg",
        "original_language": "en",
        "original_title": "The Lord of the Rings",
        "genre_ids": [
          12,
          16,
          18,
          14,
          10751
        ],
        "backdrop_path": "/8HqSxB9VLJkbRXRdlocbLq9wxwY.jpg",
        "adult": false,
        "overview": "The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron's reign over Middle-earth.",
        "release_date": "1978-11-15"
      },
      {
        "vote_count": 12779,
        "id": 121,
        "video": false,
        "vote_average": 8.3,
        "title": "The Lord of the Rings: The Two Towers",
        "popularity": 27.95,
        "poster_path": "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Two Towers",
        "genre_ids": [
          12,
          14,
          28
        ],
        "backdrop_path": "/dG4BmM32XJmKiwopLDQmvXEhuHB.jpg",
        "adult": false,
        "overview": "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
        "release_date": "2002-12-18"
      },
      {
        "vote_count": 3,
        "id": 453779,
        "video": false,
        "vote_average": 7,
        "title": "A Passage to Middle-earth: Making of 'Lord of the Rings'",
        "popularity": 1.635,
        "poster_path": "/sDsmtdmsS1KqJTKwKb1hJ9VFL6w.jpg",
        "original_language": "en",
        "original_title": "A Passage to Middle-earth: Making of 'Lord of the Rings'",
        "genre_ids": [
          99
        ],
        "backdrop_path": null,
        "adult": false,
        "overview": "",
        "release_date": "2001-12-09"
      },
      {
        "vote_count": 0,
        "id": 583479,
        "video": false,
        "vote_average": 0,
        "title": "The Lord of the Rings",
        "popularity": 0.6,
        "poster_path": "/vZaK1ir0dvG43bZjAF224vfVbCW.jpg",
        "original_language": "en",
        "original_title": "Sagan om Ringen",
        "genre_ids": [
          14
        ],
        "backdrop_path": null,
        "adult": false,
        "overview": "Sagan om ringen is a 1971 Swedish live action television film in two episodes. The film was inspired by the music album Music Inspired by Lord of the Rings by Bo Hansson, which in turn was inspired by J. R. R. Tolkien's 1954 novel The Lord of the Rings.[1]  Live actors were filmed and inserted into hand drawn backgrounds.[1]  Drawings were made by Peter Lindblom.",
        "release_date": ""
      },
      {
        "vote_count": 3,
        "id": 335612,
        "video": false,
        "vote_average": 7.7,
        "title": "The Making of 'The Lord of the Rings'",
        "popularity": 0.693,
        "poster_path": null,
        "original_language": "en",
        "original_title": "The Making of 'The Lord of the Rings'",
        "genre_ids": [
          99
        ],
        "backdrop_path": null,
        "adult": false,
        "overview": "A collection of The Making of 'The Fellowship of the Ring', 'The Two Towers' and 'The Return of the King'. This documentary treats movie, special effect and fantasy fans to a behnd-the-scenes look at the making of The Lord of the Rings, Peter Jackson's blockbuster three-film adaptation of J.R.R. Tolkien's classic work of fiction about the battle to save Middle Earth from the power of Sauron, and the quest that must be undertaken by a single small hobbit. Includes interviews with director Jackson, stars Ian McKellen and Elijah Wood, and the rest of the cast and crew who share some of the experiences they had in making the film, as well as discuss the massive effort that went into making the myths and monsters of Middle Earth a reality.",
        "release_date": "2002-04-06"
      },
      {
        "vote_count": 2,
        "id": 155586,
        "video": false,
        "vote_average": 6.8,
        "title": "Creating the Lord of the Rings Symphony",
        "popularity": 0.6,
        "poster_path": "/kDXXB3qQiFOExnl0HK2HlglDJuI.jpg",
        "original_language": "en",
        "original_title": "Creating the Lord of the Rings Symphony",
        "genre_ids": [
          99
        ],
        "backdrop_path": "/9kw9LqyNmgru8qFEoTZE9towoiU.jpg",
        "adult": false,
        "overview": "Creating The Lord of the Rings Symphony includes excerpts of live concert footage from The Lord of the Rings Symphony: Six Movements for Orchestra, Chorus and Soloists, documentary commentary by Howard Shore, and the illustrations of Alan Lee and John Howe.",
        "release_date": "2004-12-14"
      },
      {
        "vote_count": 0,
        "id": 573089,
        "video": false,
        "vote_average": 0,
        "title": "The Lord of the Rings: The Quest Fulfilled",
        "popularity": 0.6,
        "poster_path": null,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Quest Fulfilled",
        "genre_ids": [
          99
        ],
        "backdrop_path": null,
        "adult": false,
        "overview": "",
        "release_date": "2003-12-26"
      },
      {
        "vote_count": 1,
        "id": 296260,
        "video": false,
        "vote_average": 8,
        "title": "Master of the Rings: The Unauthorized Story Behind J.R.R. Tolkien's 'Lord of the Rings'",
        "popularity": 0.6,
        "poster_path": "/jJsVP5uJn3U7cAplliLdC6Vs2dp.jpg",
        "original_language": "en",
        "original_title": "Master of the Rings: The Unauthorized Story Behind J.R.R. Tolkien's 'Lord of the Rings'",
        "genre_ids": [
          99
        ],
        "backdrop_path": null,
        "adult": false,
        "overview": "This documentary examines the social and cultural underpinnings of the trilogy of The Lord of the Rings by J.R.R. Tolkien, in an attempt to understand the work's phenomenal success and influence. The program looks for answers in the author's sources of inspiration, from the folk legends of Norway to the field of linguistics of which Tolkien was a lifelong student. It finds that the deep chord the story strikes owes its resonance to the author's use of archetypal imagery and language. Many examples of these recurrent themes and images are given, with readings from the work and other literature. Interviews with the book's illustrators, the brothers Hildebrandt, speak to the power of the imagery in the classic story. Scholars, Tolkien's children, and the author himself provide insight into the mythic themes and the spell they have cast over the vast readership of The Lord of the Rings.",
        "release_date": "2001-12-04"
      },
      {
        "vote_count": 125,
        "id": 1362,
        "video": false,
        "vote_average": 6.1,
        "title": "The Hobbit",
        "popularity": 5.455,
        "poster_path": "/xP93GoIe8MI23n5ZQ7aZLTzLE0g.jpg",
        "original_language": "en",
        "original_title": "The Hobbit",
        "genre_ids": [
          10751,
          14,
          16,
          12
        ],
        "backdrop_path": "/fcZDxvCD4Pg7lO2RwHNS0DC1B3m.jpg",
        "adult": false,
        "overview": "Bilbo Baggins the Hobbit was just minding his own business, when his occasional visitor Gandalf the Wizard drops in one night. One by one, a whole group of dwarves drop in, and before he knows it, Bilbo has joined their quest to reclaim their kingdom, taken from them by the evil dragon Smaug. The only problem is that Gandalf has told the dwarves that Bilbo is an expert burglar, but he isn't...",
        "release_date": "1977-11-27"
      },
      {
        "vote_count": 17,
        "id": 1361,
        "video": false,
        "vote_average": 5.5,
        "title": "The Return of the King",
        "popularity": 2.497,
        "poster_path": "/rmjhiMrx6cqwsrg4tqYuIBk5SkY.jpg",
        "original_language": "en",
        "original_title": "The Return of the King",
        "genre_ids": [
          16,
          10751,
          14
        ],
        "backdrop_path": "/5RAqAsGehjveRczMAtkEttLrv22.jpg",
        "adult": false,
        "overview": "Two Hobbits struggle to destroy the Ring in Mount Doom while their friends desperately fight evil Lord Sauron's forces in a final battle.",
        "release_date": "1980-05-11"
      },
      {
        "vote_count": 1,
        "id": 183137,
        "video": false,
        "vote_average": 7,
        "title": "Lord of the Cockrings",
        "popularity": 0.824,
        "poster_path": "/odLpXJJNCRcsKxbi5XVVOYNtAhk.jpg",
        "original_language": "en",
        "original_title": "Lord of the Cockrings",
        "genre_ids": [],
        "backdrop_path": "/ggzsbR0joPc67L0zACBNOfMK8dL.jpg",
        "adult": false,
        "overview": "A bizarre sexual spoof of Tolkien's LORD OF THE RINGS trilogy where a nerdy New Jersey computer programmer named Scroto Baggins is chosen to save Middle Earth from its untimely doom.",
        "release_date": "2002-01-01"
      },
      {
        "vote_count": 6,
        "id": 192349,
        "video": false,
        "vote_average": 5.8,
        "title": "National Geographic - Beyond the Movie: The Fellowship of the Rings",
        "popularity": 1.354,
        "poster_path": "/knCJvfbr4LWNZBkTDlwRdM28PuR.jpg",
        "original_language": "en",
        "original_title": "National Geographic - Beyond the Movie: The Fellowship of the Rings",
        "genre_ids": [
          99
        ],
        "backdrop_path": "/puAMVrEI9gKGPJDbKUSf9QvWZ2p.jpg",
        "adult": false,
        "overview": "A documentary about the influences on Tolkien, covering in brief his childhood and how he detested the onslaught of industry through the idyllic countryside, moving on to describe his fighting experience from WWI, and closing with a look at the Finnish inspiration for the scholar's self-invented languages of Elfish. In between are interviews with the cast of the films and some clips, by far the most from \"The Fellowship of the Ring\", but a few glimpses of Rohan riders (from \"The Two Towers\") are provided. Also, there are interviews with a range of the filmmakers.",
        "release_date": "2001-12-23"
      }
    ]
  }

  //TV endpoint SEARCH https://api.themoviedb.org/3/search/tv?api_key=dadbb348c7503427d5277348f42629dc&query=how%20i%20met%20your%20mother;
  //TV endpoint DETAILS https://api.themoviedb.org/3/tv/1100?api_key=dadbb348c7503427d5277348f42629dc&language=en-US;
  let data2={
    "page": 1,
    "total_results": 2,
    "total_pages": 1,
    "results": [
      {
        "original_name": "How I Met Your Mother",
        "id": 1100,
        "name": "How I Met Your Mother",
        "vote_count": 1142,
        "vote_average": 7.47,
        "poster_path": "/izncB6dCLV7LBQ5MsOPyMx9mUDa.jpg",
        "first_air_date": "2005-09-19",
        "popularity": 58.207,
        "genre_ids": [
          35
        ],
        "original_language": "en",
        "backdrop_path": "/jqLv26q1BcU6mIEWBl0z7nmUYr8.jpg",
        "overview": "How I Met Your Mother is an American sitcom that originally aired on CBS from September 19, 2005, to March 31, 2014. The series follows the main character, Ted Mosby, and his group of friends in Manhattan. As a framing device, Ted, in the year 2030, recounts to his son and daughter the events that led to his meeting their mother.",
        "origin_country": [
          "US"
        ]
      },
      {
        "original_name": "Как я встретил вашу маму",
        "id": 85267,
        "name": "How I met your mother",
        "vote_count": 0,
        "vote_average": 0,
        "poster_path": "/rTv2JPtemNBkOMDDNxqvEkGAI5S.jpg",
        "first_air_date": "2010-10-04",
        "popularity": 0.752,
        "genre_ids": [
          35
        ],
        "original_language": "en",
        "backdrop_path": "/kWZVnBlI9u1Zjaql17bXnra20ud.jpg",
        "overview": "How I met your mother, the Russian comedy series produced by the company Good Story Media, which is an adaptation of the eponymous American television series How I Met Your Mother.\n\nThe main character of the series, Dima Nosov, in the distant 2034, tells his teenage children about his own youth, as well as the life stories of his friends. Dima describes the circumstances in which he met his future wife. At the same time, he dwells on various events that took place in his life at that time with him and his friends: Pasha Vinogradov, Lucy Lyubimova, Yury Sadovskiy, and Katya Krivchik. The main action of the series takes place in Moscow today (in 1st season - in 2008–2009).",
        "origin_country": [
          "RU"
        ]
      }
    ]
  }

  //res.data.first_air_date;
  //res.data.last_air_date;
  //res.data.next_episode_to_air": null,
  //TV endpoint DETAILS https://api.themoviedb.org/3/tv/1100?api_key=dadbb348c7503427d5277348f42629dc&language=en-US;
  let data3 = {
    "backdrop_path": "/jqLv26q1BcU6mIEWBl0z7nmUYr8.jpg",
    "created_by": [
        {
            "id": 1217221,
            "credit_id": "5254161c19c295794037bfca",
            "name": "Carter Bays",
            "gender": 2,
            "profile_path": null
        },
        {
            "id": 1217224,
            "credit_id": "5254161c19c295794037bfd0",
            "name": "Craig Thomas",
            "gender": 2,
            "profile_path": null
        }
    ],
    "episode_run_time": [
        22,
        25
    ],
    "first_air_date": "2005-09-19",
    "genres": [
        {
            "id": 35,
            "name": "Comedy"
        }
    ],
    "homepage": "https://www.cbs.com/shows/how_i_met_your_mother/",
    "id": 1100,
    "in_production": false,
    "languages": [
        "en"
    ],
    "last_air_date": "2014-03-31",
    "last_episode_to_air": {
        "air_date": "2014-03-31",
        "episode_number": 24,
        "id": 971360,
        "name": "Last Forever: Part Two",
        "overview": "Ted finally finishes telling his kids the story of how he met their mother.",
        "production_code": "9ALH24",
        "season_number": 9,
        "show_id": 1100,
        "still_path": "/uCGse43FNRAhqhBXA50sFMjKasl.jpg",
        "vote_average": 4.853,
        "vote_count": 17
    },
    "name": "How I Met Your Mother",
    "next_episode_to_air": null,
    "networks": [
        {
            "name": "CBS",
            "id": 16,
            "logo_path": "/nm8d7P7MJNiBLdgIzUK0gkuEA4r.png",
            "origin_country": "US"
        }
    ],
    "number_of_episodes": 208,
    "number_of_seasons": 9,
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_name": "How I Met Your Mother",
    "overview": "How I Met Your Mother is an American sitcom that originally aired on CBS from September 19, 2005, to March 31, 2014. The series follows the main character, Ted Mosby, and his group of friends in Manhattan. As a framing device, Ted, in the year 2030, recounts to his son and daughter the events that led to his meeting their mother.",
    "popularity": 58.207,
    "poster_path": "/izncB6dCLV7LBQ5MsOPyMx9mUDa.jpg",
    "production_companies": [
        {
            "id": 19792,
            "logo_path": null,
            "name": "Carter Bays",
            "origin_country": ""
        },
        {
            "id": 1556,
            "logo_path": "/31h94rG9hzjprXoYNy3L1ErUya2.png",
            "name": "20th Century Fox Television",
            "origin_country": "US"
        },
        {
            "id": 21659,
            "logo_path": null,
            "name": "20th Television",
            "origin_country": ""
        }
    ],
    "seasons": [
        {
            "air_date": "2006-11-20",
            "episode_count": 17,
            "id": 3613,
            "name": "Specials",
            "overview": "",
            "poster_path": "/ggQEDWguo6CVctkLKMFcOXzEQxR.jpg",
            "season_number": 0
        },
        {
            "air_date": "2005-09-19",
            "episode_count": 22,
            "id": 3607,
            "name": "Season 1",
            "overview": "The first season of How I Met Your Mother, an American sitcom created by Carter Bays and Craig Thomas, premiered on CBS in the United States on September 19, 2005 and concluded on May 15, 2006. The season was directed by Pamela Fryman and produced by Bays & Thomas Productions and 20th Century Fox Television. It consists of 22 episodes, each running approximately 22 minutes in length.",
            "poster_path": "/1ufyYSuGLrSgrKPEQzvc53tUmJL.jpg",
            "season_number": 1
        },
        {
            "air_date": "2006-09-18",
            "episode_count": 22,
            "id": 3608,
            "name": "Season 2",
            "overview": "The second season of the American television comedy series How I Met Your Mother premiered on September 18, 2006 and concluded on May 14, 2007. It consisted of 22 episodes, each approximately 22 minutes in length. CBS broadcast the first three episodes of the second season on Monday nights at 8:30 pm in the United States, the remaining episodes were broadcast at 8:00pm. The complete second season was released on Region 1 DVD on October 2, 2007. In the United Kingdom it aired via E4 from October 2, 2009 weekdays at 7:30pm.",
            "poster_path": "/Aa6ZFj6SaDGasRk9pakQxQhP1tj.jpg",
            "season_number": 2
        },
        {
            "air_date": "2007-09-24",
            "episode_count": 20,
            "id": 3609,
            "name": "Season 3",
            "overview": "The third season of the American television comedy series How I Met Your Mother premiered on September 24, 2007 and concluded on May 19, 2008. It consisted of 20 episodes, each running approximately 22 minutes in length. CBS broadcast the third season on Monday nights at 8:00 pm in the United States until December 10, 2007 when the season was interrupted by the writer's strike, when the season continued on March 17, 2008 it was moved back to 8:30pm. The complete third season was released on Region 1 DVD on October 7, 2008. In the United Kingdom it aired via E4 from October 30, 2009 weekdays at 7:30pm.",
            "poster_path": "/eAKwxhNJynTiBi2FcLIbgypYivi.jpg",
            "season_number": 3
        },
        {
            "air_date": "2008-09-22",
            "episode_count": 24,
            "id": 3610,
            "name": "Season 4",
            "overview": "The fourth season of the American television comedy series How I Met Your Mother premiered on September 22, 2008 and concluded on May 18, 2009. It consisted of 24 episodes, each running approximately 22 minutes in length. CBS broadcast the fourth season on Monday nights at 8:30 pm in the United States. The complete fourth season was released on Region 1 DVD on September 29, 2009. In the United Kingdom it began airing via E4 from Thursday, December 10 weekly.\n\nTo date, it is the only season of the series to be nominated for the Primetime Emmy Award for Outstanding Comedy Series.",
            "poster_path": "/eRZKD5EzVZ8e1ZaADylVzPuPbM0.jpg",
            "season_number": 4
        },
        {
            "air_date": "2009-09-21",
            "episode_count": 24,
            "id": 3611,
            "name": "Season 5",
            "overview": "The fifth season of the American television comedy series How I Met Your Mother premiered on September 21, 2009 and concluded on May 24, 2010. It consists of 24 episodes, each running approximately 22 minutes in length. CBS broadcast the fifth season on Monday nights at 8:00 pm in the United States.",
            "poster_path": "/mcpb3gsBjqIgXRaMvOqoqEbnf8d.jpg",
            "season_number": 5
        },
        {
            "air_date": "2010-09-20",
            "episode_count": 24,
            "id": 3612,
            "name": "Season 6",
            "overview": "The sixth season of the American television comedy series How I Met Your Mother premiered on September 20, 2010, to conclude on May 16, 2011 on CBS.",
            "poster_path": "/n1kRegqvMCkT6jlc35SZZeusEtJ.jpg",
            "season_number": 6
        },
        {
            "air_date": "2011-09-19",
            "episode_count": 24,
            "id": 3614,
            "name": "Season 7",
            "overview": "The seventh season of the American television comedy series How I Met Your Mother was announced in March 2011, along with confirmation of an eighth season. The seventh season premiered on CBS on September 19, 2011, with two episodes airing back-to-back and concluded on May 14, 2012.",
            "poster_path": "/aX9GAt7NNgW5mWY9RkApSY0854r.jpg",
            "season_number": 7
        },
        {
            "air_date": "2012-09-24",
            "episode_count": 24,
            "id": 3615,
            "name": "Season 8",
            "overview": "The eighth season of the American television comedy series How I Met Your Mother was announced in March 2011 along with confirmation of the ninth season. The season premiered on September 24, 2012 and concluded on May 13, 2013.",
            "poster_path": "/q4g25dFhEwXiHSvOa4qQbgByNTv.jpg",
            "season_number": 8
        },
        {
            "air_date": "2013-09-23",
            "episode_count": 24,
            "id": 3616,
            "name": "Season 9",
            "overview": "Taking place immediately after where the previous season left off, Season 9 covers the events of a single weekend that lead up to Barney and Robin's wedding. During the course of the weekend, \"The Mother\" is separately introduced to Robin, Barney, Lily, and Marshall, before finally meeting Ted. The season also features frequent flashbacks and flashforwards in order to fully integrate The Mother's character with the rest of the cast.",
            "poster_path": "/ez6pjmvnZpdfowSlGfEJFsNZLBQ.jpg",
            "season_number": 9
        }
    ],
    "status": "Ended",
    "type": "Scripted",
    "vote_average": 7.5,
    "vote_count": 1142
}