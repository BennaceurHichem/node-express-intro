const mongoose = require('mongoose');



const Dishes = require('./models/dishes');
const url = 'mongodb://localhost:27017/conFusion';
const connect  = mongoose.connect(url);


//the mongoose connection 
connect.then((db)=>{


    console.log("succesfully connect ")


 Dishes.create({
                name:"chakhchoukha",
                description:'test description'
    })
    .then((dish)=> {
        console.log("the inserted dish : "+dish);

        //finding all dishes
        return Dishes.find({}).exec();
    })
    .then((dishes)=>{
        console.log(dishes);
        //remove all dishes after finding it 
        console.log("removed dishes are :"+dishes)
        return Dishes.deleteMany({});
    })
    .then(()=>{
            //after removing all dishes, close the connection
        return mongoose.connection.close();

    })
    .catch((err)=>{
        //§in case of connection error
        console.log("eERROR: "+err)
    })


})