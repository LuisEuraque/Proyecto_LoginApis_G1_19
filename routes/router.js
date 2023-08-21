"use strict";

var 
  LoginController = require("../controllers/Login-controller"),
  express = require("express"),
  router = express.Router();
router

.post('/Login/login', LoginController.login)

.use(LoginController.error404)

module.exports = router;