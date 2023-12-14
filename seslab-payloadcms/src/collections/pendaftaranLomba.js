// Connection URL
const url = 'mongodb://5027221014:5027221014@10.15.41.250:27017/A-5027221014?authSource=admin';

// Create a MongoDB client and connect to the server
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Collection name
const pendaftaranLomba = 'pendaftaranLomba';

// Connect to the MongoDB server
client.connect(function(err) {
  if (err) throw err;

  // Create a new collection
  const db = client.db();
  const collection = db.collection(pendaftaranLomba);

  // Create the collection with minimal fields
  collection.insertOne({
    Nama: 'abcd',
    Email: 'abcd123@gmail.com',
    'Asal Sekolah': 'SMA 13 Jakarta',
    Status: 'waiting',
    'Tanggal Pendaftaran': new Date()
  });

  console.log(`Collection '${pendaftaranLomba}' created with minimal fields.`);
  
  // Close the connection
  client.close();
});
