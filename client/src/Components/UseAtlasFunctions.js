import React from 'react';
import { items } from '../stitch';

export default function displayData() {
  items
    .find({}, { limit: 1000 })
    .toArray()
    .then(docs => console.log(docs));
}
