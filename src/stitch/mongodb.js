import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import { app } from './app';

// TODO: Initialize a MongoDB Service Client
const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  'mongodb-atlas'
);

// TODO: Instantiate a collection handle for todo.items
const items = mongoClient.db('oasis').collection('youth');

// items.count().then(res => console.log(res));
// items.findOne().then(res => {
//   console.log(res);
//   console.log(res._id.getTimestamp());
// });

export { items };
