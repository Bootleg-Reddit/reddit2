const { Router } = require("express");
const router = Router();

const commentController = require("../controllers/controllerComment");
const authentication = require("../middlewares/authentication");
const { authorizationComment } = require("../middlewares/authorization");

router.get("/", commentController.list);
router.get("/:postId", commentController.listByPost);
router.post("/", authentication, commentController.create);
router.put("/:id", authentication, commentController.editCommentById);
router.delete(
  "/:id",
  authentication,
  authorizationComment,
  commentController.deleteCommentById
); //tesing authorizationn
// router.delete("/:id", commentController.deleteCommentById);
module.exports = router;