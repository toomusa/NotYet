
const router = require("express").Router();
const dbController = require("../../../controllers/dbController")

const passportService = require("../../../services/passport");
const authMiddlewares = require("../../../middlewares/authMiddlewares");


// router.route("/saveShow")
//     .post(dbController.saveShow);
// router.route("/saveMovie")
//     .post(dbController.saveMovie);

// router.route("/addChannel")
//     .post(dbController.addChannel);
// router.route("/inviteToChannel")
//     .post(dbController.inviteToChannel);
// router.route("/recieveInvite")
//     .post(dbController.recieveInvite);    

router.route("/sendMessage")
    .post(dbController.sendMessage);
// router.route("/deleteMessage")
//     .post(dbController.deleteMessage);

router.route("/addMovies")
    .post(dbController.addMovies);
router.route("/addShows")
    .post(dbController.addShows);

module.exports = router;