const router = require("express").Router();
const routerUser = require("./user");
const routerPost = require("./post");
const routerComment = require("./comment");
const routerSubreddit = require("./subreddit")
router
  .use("/users", routerUser)
  .use("/posts", routerPost)
  .use("/comments", routerComment)
  .use("/subreddit", routerSubreddit);

module.exports = router;
