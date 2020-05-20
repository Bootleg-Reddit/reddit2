const router = require("express").Router();
const ControllerPost = require("../controllers/controllerPost");
const errorHandler = require("../middlewares/errorHandler");
const { authorizationPost } = require("../middlewares/authorization");
const authentication = require("../middlewares/authentication");

router
  .get("/", ControllerPost.getAllPost)
  .post("/", authentication, ControllerPost.createPost)
  .get("/:id", ControllerPost.getPostById)
  .put("/:id", authentication, authorizationPost, ControllerPost.editPost)
  .delete("/:id", authentication, authorizationPost, ControllerPost.deletePost);

router.use(errorHandler);

module.exports = router;
