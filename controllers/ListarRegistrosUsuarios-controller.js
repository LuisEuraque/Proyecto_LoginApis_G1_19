'use strict'

var ListarRegistrosUsuariosModel = require("../models/ListarRegistrosUsuarios-model"),
ListarRegistrosUsuariosController = () => {};

ListarRegistrosUsuariosController.getAll = (req,res,next) => (

    ListarRegistrosUsuariosModel.getAll ((err,rows) => {

       if (err)
       {
            let locals = {

                title : 'Error al controlar la base de datos',
                description : 'Error de sintaxis SQL',
                error : err
            }
            res.render('error',locals)
        }
        else
        {
            let locals = {
                title : 'Lista Registro de Usuarios',
                data: rows
            }
            res.status(200).send(rows.rows)
        } 

    })

)

ListarRegistrosUsuariosController.error404 = (req,res,next) =>
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
    module.exports = ListarRegistrosUsuariosController;
