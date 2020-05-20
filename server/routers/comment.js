const { Router } = require("express");
const router = Router();

const commentController = require("../controllers/controllerComment");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.get("/", commentController.list);
router.post("/", authentication, commentController.create);
router.put("/:id", authentication, commentController.editCommentById);
router.delete(
  "/:id",
  authentication,
  authorization,
  commentController.deleteCommentById
); //tesing authorization
// router.delete("/:id", commentController.deleteCommentById);
module.exports = router;
