"use strict";

var  LoginController = require("../controllers/Login-controller"),
  express = require("express"),
  router = express.Router();

router
  .use(LoginController.error404);

module.exports = router;