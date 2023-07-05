const express= require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/login-teacher', userController.loginTeacher);
router.get('/login-student', userController.loginStudent);

router.use('/results' , require('./result'));

module.exports = router;