const Results = require('../models/Result');

const errHandler = err =>{
    console.error("Error :" , err);
};

module.exports.findAll = async function(req,res){
   
    const results = await Results.findAll({raw:true}).catch(errHandler);
    res.json(results);
}

module.exports.findOne = async function(req,res){
   
    const result = await Results.findOne({where:{
        roll_no : req.query.roll_no,
        date_of_birth: req.query.date_of_birth,
    }}).catch(errHandler);

    res.json(result);
}

module.exports.get = async function(req,res){
   
    const result = await Results.findOne({where:{
        roll_no : req.query.roll_no
    }}).catch(errHandler);

    res.json(result);
}

module.exports.add = async function(req,res){
    const result = await Results.create({
        roll_no : req.body.roll_no,
        name : req.body.name,
        date_of_birth :req.body.date_of_birth,
        score : req.body.score
    }).catch(errHandler);

    res.json(result)
}

module.exports.getEdit = async function(req,res){
    const result = await Results.findOne({where:{
        roll_no : req.query.roll_no
    }}).catch(errHandler);
}

module.exports.postEdit = async function(req,res){
    const result = await Results.update({ 
        name : req.body.name,
        date_of_birth :req.body.date_of_birth,
        score : req.body.score
     }, {
        where: {
          roll_no : req.query.roll_no
        }
      }).catch(errHandler);
    
    res.json(result)
}

module.exports.delete = async function(req,res){
    const nd = await Results.destroy({where: {roll_no : req.query.roll_no}}).catch(errHandler);
    res.json(nd);
}