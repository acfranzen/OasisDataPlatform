import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import { app } from './app';

// TEMP
// const { AnonymousCredential } = require('mongodb-stitch-browser-sdk');

// TODO: Initialize a MongoDB Service Client
const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  'mongodb-atlas'
);

// TODO: Instantiate a collection handle for todo.items
const items = mongoClient.db('oasis').collection('youth');

// items.insertOne({ name: 'change++' });
items.count().then(res => console.log(res));
items.findOne().then(res => {
  console.log(res);
  console.log(res._id.getTimestamp());
});

// app.auth
//   .loginWithCredential(new AnonymousCredential())
//   .then(user =>
//     items.updateOne(
//       { owner_id: app.auth.user.id },
//       { $set: { number: 42 } },
//       { upsert: true }
//     )
//   )
//   .then(() =>
//     items.find({ owner_id: app.auth.user.id }, { limit: 100 }).asArray()
//   )
//   .then(docs => {
//     console.log('Found docs', docs);
//     console.log('[MongoDB Stitch] Connected to Stitch');
//   })
//   .catch(err => {
//     console.error(err);
//   });

export { items };
