const { Comment, Post } = require("../models");
const authorizationComment = (req, res, next) => {
  Comment.findByPk(req.params.id).then(data => {
    if (!data) {
      res.status(404).json({ error: "Comment not found" });
    } else {
      if (data.UserID == req.userID) {
        next();
      } else {
        res.status(401).json({ error: "Not Authorized" });
      }
    }
  });
};

const authorizationPost = (req, res, next) => {
  Post.findByPk(req.params.id)
    .then(data => {
      if (data) {
        if (data.UserID === Number(req.userID)) {
          next();
        } else {
          next({ status: 401, msg: "Not authorized" });
        }
      } else {
        next({ status: 404, msg: "Not found!" });
      }
    })
    .catch(error => {
      next();
    });
};

module.exports = { authorizationComment, authorizationPost };
