const assert = require('assert');


exports.insertDocument = (db,document, collection, callback)=>{


    const col= db.collection(collection);

    return col.insertOne(document);

};


exports.findDocuments = (db, collection, callback)=>{
    const col= db.collection(collection);
    return col.find({}).toArray();



}

exports.removeDocument = (db, document, collection, callback)=>{
    const col = db.collection(collection);
    return col.deleteOne(document);


}


exports.updateDocument = (db, document,docUpdate, collection, callback)=>{
    const col = db.collection(collection);
    //{ $set: update } is how to update in mongoDb 
   return  col.updateOne(document, { $set: docUpdate }, null);


}