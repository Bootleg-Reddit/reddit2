const router = require("express").Router();
const routerUser = require("./user");
const routerPost = require("./post");
const routerComment = require("./comment");

router
  // .use("/user", routerUser)
  .use("/post", routerPost);
// .use("/comment", routerComment);

module.exports = router;
