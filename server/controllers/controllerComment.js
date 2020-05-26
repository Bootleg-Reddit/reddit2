const { Comment, User, Post } = require("../models");

class Comments {
  static list(req, res) {
    Comment.findAll({
      include: [{ model: Post }, { model: User }],
      //   where: { UserId: req.userID },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static listByPost(req, res){
    console.log('aaa')
    console.log(req.params.postId)
    Comment.findAll({
      where: {PostID: req.params.postId},
      include: [{ model: Post }, { model: User }]
    })
    .then((data)=> {
      return data.sort((a,b)=>{
        return b.id - a.id;
      });
      // res.status(200).json(data);
    })
    .then(data=>{
      res.status(200).json(data);
    })

    .catch((err)=> {
      res.status(500).json(err);
    })
  }

  static create(req, res) {
    console.log('we in')
    console.log(req.body.content,req.params.id)
    Comment.create({
      content: req.body.content,
      upvotes: 0,
      downvotes: 0,
      UserID: req.userID,
      PostID: req.params.id,
    }, {
      include: [{ model: Post }, { model: User }]
    })
      .then((data) => {
        console.log(data)
        return Comment.findAll({
          where: {PostID: req.params.id},
          include: [{ model: Post }, { model: User }]
        })
      })
      .then((data)=> {
        return data.sort((a,b)=>{
          return b.id - a.id;
        });  
      })
      .then((data)=>{
        res.status(201).json(data);
      })
      .catch((err) => {
        let error = "";
        if (err.name === "SequelizeValidationError") {
          for (let i = 0; i < err.errors.length - 1; i++) {
            error += `${err.errors[i].message} & `;
          }
          error += `${err.errors[err.errors.length - 1].message}`;
          res.status(400).json({ error });
        } else {
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
  }

  static editCommentById(req, res) {
    let commentId = req.params.id;
    Comment.update(
      {
        content: req.body.content,
        upvotes: req.body.upvotes,
        downvotes: req.body.downvotes,
        UserID: req.userID,
        PostID: req.body.postId,
      },
      {
        where: { id: commentId },
      }
    )
      .then((data) => {
        return Comment.findByPk(commentId);
      })
      .then((dataComment) => {
        if (dataComment) res.status(200).json(dataComment);
        else res.status(404).json({ message: "data not found" });
      })
      .catch((err) => {
        let error = "";
        if (err.name === "SequelizeValidationError") {
          for (let i = 0; i < err.errors.length - 1; i++) {
            error += `${err.errors[i].message} & `;
          }
          error += `${err.errors[err.errors.length - 1].message}`;
          res.status(400).json({ error });
        } else {
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
  }

  static deleteCommentById(req, res) {
    let commentId = req.params.id;
    let dataDelete = null;

    Comment.findByPk(commentId)
      .then((dataComment) => {
        dataDelete = dataComment;
        return Comment.destroy({
          where: { id: commentId },
        });
      })
      .then((data) => {
        if (data) res.status(200).json(dataDelete);
        else res.status(404).json({ error: "comment not found" });
      })
      .catch((err) => {
        res.status(500).json({ error: "Internal Server Error" });
      });
  }
}
module.exports = Comments;
