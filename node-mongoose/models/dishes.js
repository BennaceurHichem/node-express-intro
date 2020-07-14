const mongoose  = require('mongoose');
const Schema= mongoose.Schema;


const dishes  = new Schema({

name:{
    type:String,
    required:true,
    unique:true
},
description:{
    type:String,
    required:true
}


},
//other configs 
{
    timestamp:true



});



var Dishes = mongoose.model('Dish',dishes);


module.exports  = Dishes;

