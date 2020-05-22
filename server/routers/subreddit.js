const router = require("express").Router();
const ControllerSubreddit = require("../controllers/controllerSubreddit");
const errorHandler = require("../middlewares/errorHandler");
const authentication = require("../middlewares/authentication");

router
  .get("/", ControllerSubreddit.getSubbreddits)
  .post("/", authentication, ControllerSubreddit.createSubreddit)

router.use(errorHandler);

module.exports = router;
