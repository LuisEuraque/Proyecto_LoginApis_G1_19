'use strict'

var LoginModel = require ("../models/Login-model"),
LoginController = () => {};

LoginController.login = (req, res, next) => {
   var { CodigoUsuario, password } = req.body;

    LoginModel.login(CodigoUsuario, password)
        .then(result => {
            if (result) {
                res.status(200).json({ Mensaje: 'Inicio de sesión exitoso' });
            } else {
                res.status(401).json({ Mensaje: 'Credenciales incorrectas' });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ Mensaje: 'Error en el servidor' });
        });
};
LoginController.addForm = (req,res,next) => 
res.render('add-Login',{title:'Ingresar'})

LoginController.error404 = (req,res,next) =>
{
    let error = new Error(),
    locals = {
        title:'Error 404',
        description:'Recurso no encontrado',
        error:error
    }
    error.status = 404
    res.render('error',locals)
    next()
}
module.exports = LoginController;