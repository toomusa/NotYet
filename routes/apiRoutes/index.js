const router = require("express").Router();
const authRoutes = require("./authRoutes");
const dbRoutes = require("./dbRoutes");
const movieRoutes = require("./movieRoutes");
const showRoutes = require("./showRoutes");
const passportService = require("../../services/passport")
const authMiddlewares = require("../../middlewares/authMiddlewares");

// /api prepended to these routes

router.route("/test")
    .get(authMiddlewares.requireAuth, (req, res) => {
        res.send(req.user);
    })

router.use("/auth", authRoutes);
router.use("/db", dbRoutes);
router.use("/movie", movieRoutes);
router.use("/show", showRoutes);

module.exports = router;
