const MongoClient = require("mongodb").MongoClient;
const assert  = require("assert");
const dbOps = require("./operations");

const url = "mongodb://localhost:27017"
const dbName = "conFusion"


//connect the MongoClient
MongoClient.connect(url,(err,client)=>{


    //check if there is no error 
    assert.equal(err,null);

    console.log("Connected correctly to the server");

    //sepecify the db 
    const db = client.db(dbName);
    //get all dishes collections
    const collection   = db.collection("dishes");


    dbOps.insertDocument(db,{name:"hichem",description:"this is a small description"},
    'dishes')
    .then((result)=>{
            //when passing a callback as a parameter, we can implement it here, 
        //we can do what we want with the callback result
        console.log("the element is iserted succesfullty "+result.ops);

        //here we can find some specific documents 
        //from the resulte collection "result" 
        //and implement what we did before
        dbOps.findDocuments(db,'dishes').then((docs)=>{

            console.log("document found :) ", docs)

            dbOps.updateDocument(db, { name: "hichem" },
                { description: "Updated description Test" }, "dishes").then((result)=>{
                    console.log("Updated Document:\n", result.result);

                    dbOps.findDocuments(db, "dishes").then((docs)=>{
                        console.log("Found Updated Documents:\n", docs);
                        
                        db.dropCollection('dishes').then((result)=>{
                            console.log("Dropped Collection: ", result);

                            client.close();
                        });
                    });
                });



        }).catch((err)=>
        {

         })

    }).catch((err)=> {



    })



})

