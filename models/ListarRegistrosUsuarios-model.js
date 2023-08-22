"use strict"

var conn = require("../config/db-connection"),
ListarRegistrosUsuariosModel = () => {};
 ListarRegistrosUsuariosModel.getALL = (cb) => conn.query("SELECT * FROM usuario",cb);
 
module.exports = ListarRegistrosUsuariosModel;
