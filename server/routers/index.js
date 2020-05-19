const router = require("express").Router();
const routerUser = require("./user");
const routerPost = require("./post");
const routerComment = require("./comment");

router
  .use("/user")
  .use("/post")
  .use("/comment");

module.exports = router;
