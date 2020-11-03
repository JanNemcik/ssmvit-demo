const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://ssmvit-mongo:27017';

// Database Name
const dbName = 'ssmvit-demo';
const collection = 'example'

// Use connect method to connect to the server
let mongoClient

const app = express();

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

app.get('/data', async (_, res) => {
    const data = await mongoClient.db(dbName).collection(collection).find({}).toArray()
    res.send(data)
})

app.listen(3000, async () => {
    mongoClient = await MongoClient.connect(url, { useUnifiedTopology: true });
    console.info('Mongo client connected', mongoClient.isConnected())
    console.info('Server listening')
})