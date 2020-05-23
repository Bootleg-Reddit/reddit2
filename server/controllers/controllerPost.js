const { Post, Subreddit, User, PostUser} = require("../models");
const { Op } = require('sequelize');

class ControllerPost {
  static getAllPost(req, res, next) {
    Post.findAll()
      .then(allData => {
        res.status(200).json({posts: allData});
      })
      .catch(error => {
        next({ status: 500, msg: "Internal Server Error!" });
      });
  }

  static getAllPostsBySubreddit(req, res, next){
    Post.findAll({where: {SubredditID: req.params.subredditId}})
    .then(data =>{
      res.status(200).json({posts: data});
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
    const { title, content, subreddit } = req.body;
    const upvotes = 0;
    const downvotes = 0;
    const UserID = req.userID;
    let SubredditID = null
    console.log('aaa')
    Subreddit.findOne({where: {name: subreddit}})
    .then((data)=> {
      console.log('bbb')
      SubredditID = data.id;
      return Post.create({ title, content, upvotes, downvotes, UserID, SubredditID });
    })
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      console.log(error)
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

  static ratePost (req, res, next) {
    const UserId = req.userID;
    const Vote = req.body.vote;
    const PostId = req.params.id;
    //find the vote that relate to the user and post
    PostUser.findOne({
      where: {
        [Op.and]: [
          {PostId : PostId},
          { UserId : UserId }     
        ]
      }
    })
    .then(postuser => {
      //if the vote already exist, update the vote, else, make a new vote
      return postuser ? PostUser.update({PostId : PostId, UserId : UserId, Vote : Vote}, {where: {
          [Op.and]: [
              {PostId : PostId},
              { UserId : UserId }     
          ]
      }}) : PostUser.create({PostId : PostId, UserId : UserId, Vote : Vote});
    })
    .then(()=>{
        //count the number of total likes of the post
        return PostUser.count({
            where: {
              PostId : PostId,
              Vote: 'TRUE'
            }
        });
    })
    .then(upvotes =>{
        //update the no. of upvotes of the post
        return Post.update({upvotes : upvotes}, {where : {id : PostId}})
    })
    .then(()=>{
        //count the number of total dislikes of the post
        return PostUser.count({
            where: {
              PostId : PostId,
              Vote: 'FALSE'
            }
        });
    })
    .then(downvotes =>{
        //update the no. of downvotes of the post
        return Post.update({downvotes : downvotes}, {where : {id : PostId}})
    })
    .then((data)=>{
        res.status(200).json({post: data});
    })
    .catch(err =>{
      next({ status: 500, msg: "Internal Server Error!" });
    });
}
  static editPost(req, res, next) {
    const { id } = req.params;
    const { title, content, upvotes, downvotes } = req.body;
    // const UserID = req.userID;
    // const SubredditID = 1;

    Post.update(
      { title, content, upvotes, downvotes },
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
