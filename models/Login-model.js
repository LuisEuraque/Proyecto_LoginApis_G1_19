'use strict'

var conn = require ("../config/db-connection"),
LoginModel = () => {};

LoginModel.login = async (CodigoUsuario, password) => {
    try {
        var result = await conn.query('SELECT * FROM usuario WHERE "Codigo Usuario" = $1 AND Password = $2', [CodigoUsuario, password]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

module.exports = LoginModel;