const { Post } = require("../models");

class ControllerPost {
  static getAllPost(req, res, next) {
    Post.findAll()
      .then(allData => {
        res.status(200).json(data);
      })
      .catch(error => {
        next({ status: 500, msg: "Internal Server Error!" });
      });
  }

  static getPostById(req, res, next) {
    const { id } = req.params;
    Post.findOne({ where: { id: id } })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(error => {
        next({ status: 500, msg: "Internal Server Error!" });
      });
  }

  static createPost(req, res, next) {
    const { title, content } = req.body;
    const upvotes = 0;
    const downvotes = 0;
    const UserID = req.userID;
    const SubredditID = 1;

    Post.create({ title, content, upvotes, downvotes, UserID, SubredditID })
      .then(data => {
        res.status(201).json(data);
      })
      .catch(error => {
        next({ status: 500, msg: "Internal Server Error!" });
      });
  }

  static deletePost(req, res, next) {
    const { id } = req.params;
    Post.destroy({ where: { id: id } })
      .then(result => {
        if (result) {
          res.status(201).json(result);
        } else {
          res.status(404).json({ msg: "Post not found!" });
        }
      })
      .catch(error => {
        next({ status: 500, msg: "Internal Server Error!" });
      });
  }

  static editPost(req, res, next) {
    const { id } = req.params;
    const { title, content, upvotes, downvotes } = req.body;
    const UserID = req.userID;
    const SubredditID = 1;

    Post.update(
      { title, content, upvotes, downvotes, UserID, SubredditID },
      {
        where: {
          id: id
        }
      }
    )
      .then(data => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).json({ msg: "Update failed!" });
        }
      })
      .catch(error => {
        next({ status: 500, msg: "Internal Server Error!" });
      });
  }
}

module.exports = ControllerPost;
