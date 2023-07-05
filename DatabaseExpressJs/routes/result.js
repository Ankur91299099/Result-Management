const express= require('express');
const resultRouter = express.Router();
const resultController = require('../controllers/result_controller');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

resultRouter.get('/' , resultController.findAll);

resultRouter.get('/find' ,  resultController.findOne);

resultRouter.get('/get' ,  resultController.get);

resultRouter.post('/add' , jsonParser, resultController.add);

resultRouter.post('/edit' , resultController.postEdit);

resultRouter.delete('/delete' , resultController.delete);

module.exports = resultRouter;