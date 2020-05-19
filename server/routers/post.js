const router = require("express").Router();
const ControllerPost = require("../controllers/controllerPost");

router
  .get("/", ControllerPost.getAllPost)
  .post("/", ControllerPost.createPost)
  .get("/:id", ControllerPost.getPostById)
  .put("/:id", ControllerPost.editPost)
  .delete("/:id", ControllerPost.deletePost);

module.exports = router;
