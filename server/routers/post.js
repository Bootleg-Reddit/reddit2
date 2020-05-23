const router = require("express").Router();
const ControllerPost = require("../controllers/controllerPost");
const errorHandler = require("../middlewares/errorHandler");
const { authorizationPost } = require("../middlewares/authorization");
const authentication = require("../middlewares/authentication");

router
  .get("/", ControllerPost.getAllPost)
  .get("/:subredditId", ControllerPost.getAllPostsBySubreddit)
  .post("/", authentication, ControllerPost.createPost)
  .get("/:id", ControllerPost.getPostById)
  .put("/:id", authentication, authorizationPost, ControllerPost.editPost)
  .delete("/:id", authentication, authorizationPost, ControllerPost.deletePost)
  .post("/vote/:id", authentication, authorizationPost, ControllerPost.ratePost);

router.use(errorHandler);

module.exports = router;
