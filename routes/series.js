const express = require('express')
const seriesController = require('../controllers/series')
const router = express.Router()
const Serie = require('../models/serie')
const models = {
    Serie
}
//READ ROUTE
router.get('/', seriesController.index.bind(null, models ))
//CREATE ROUTE
router.get('/nova', seriesController.novaForm)
router.post('/nova', seriesController.novaProcess.bind(null, models))
//REMOVE ROUTE
router.get('/excluir/:id', seriesController.excluir.bind(null, models) )
//EDIT ROUTE
router.get('/editar/:id', seriesController.editarForm.bind(null, models) )
router.post('/editar/:id', seriesController.editarProcess.bind(null, models) )

module.exports = router