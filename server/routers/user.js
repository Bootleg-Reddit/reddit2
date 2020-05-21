const { Router } = require("express");
const router = Router();

const userController = require("../controllers/controllerUser");
const authentication = require("../middlewares/authentication");

// router.get("/", authentication, userController.list); --> testing auth
router.get("/", userController.list);
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
