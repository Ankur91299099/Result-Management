const Teacher = require('../models/Teacher');
const Student = require('../models/Student');

const errHandler = err =>{
    console.error("Error :" , err);
};

module.exports.loginTeacher = async function(req,res){

    const teacher = await Teacher.findOne({where:{
        username : req.query.username,
        password : req.query.password
    }}).catch(errHandler);

    if(teacher != null)
        res.json(teacher.id);
    else
        res.json(0)
}

module.exports.loginStudent = async function(req,res){

    const student = await Student.findOne({where:{
        username : req.query.username,
        password : req.query.password
    }}).catch(errHandler);

    if(student != null)
        res.json(student.id);
    else
        res.json(0)
}