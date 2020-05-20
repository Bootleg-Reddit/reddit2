const { Comment } = require("../models");

const authorization = (req, res, next) => {
  Comment.findByPk(req.params.id).then((data) => {
    if (!data) {
      res.status(404).json({ error: "Comment not found" });
    } else {
      if (data.UserId == req.userID) {
        next();
      } else {
        res.status(401).json({ error: "Not Authorized" });
      }
    }
  });
};

module.exports = authorization;
