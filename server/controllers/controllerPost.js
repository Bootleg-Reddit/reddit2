const { Post } = require("../models");

class ControllerPost {
  static getAllPost(req, res, next) {
    Post.findAll()
      .then(allData => {
        res.status(200).json({ data: allData });
      })
      .catch(error => {
        res.status(500).json({ error, msg: "Internal server error!" });
      });
  }

  static getPostById(req, res, next) {
    const { id } = req.params;
    Post.findOne({ where: { id: id } })
      .then(data => {
        res.status(200).json({ data });
      })
      .catch(error => {
        res.status(500).json({ error, msg: "Internal server error!" });
      });
  }

  static createPost(req, res, next) {
    const { title, content } = req.body;
    Post.create({ title, content })
      .then(data => {
        res.status(201).json({ title, content });
      })
      .catch(error => {
        res.status(500).json({ error, msg: "Internal server error!" });
      });
  }

  static deletePost(req, res, next) {
    const { id } = req.params;
    Post.destroy({ where: { id: id } })
      .then(result => {
        res.status(201).json({ msg: "Successfully delete post!" });
      })
      .catch(error => {
        res.status(500).json({ error, msg: "Internal server error!" });
      });
  }

  static editPost(req, res, next) {}
}

module.exports = ControllerPost;
