const router = require("express").Router();
const routerUser = require("./user");
// const routerPost = require("./post");
const routerComment = require("./comment");

router.use("/users", routerUser);
// router.use("/post");
router.use("/comments", routerComment);

module.exports = router;
