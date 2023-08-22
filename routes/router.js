"use strict";

var 
  LoginController = require("../controllers/Login-controller"),
  ListarRegistrosUsuariosController = require ("../controllers/ListarRegistrosUsuarios-controller"),

  express = require("express"),
  router = express.Router();
router

.post('/Login/login', LoginController.login)
.get("/usuario/getAll",ListarRegistrosUsuariosController.getAll)

.use(LoginController.error404)
.use(ListarRegistrosUsuariosController.error404)

module.exports = router;