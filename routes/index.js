const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

router.use("/api", apiRoutes);

module.exports = router;
