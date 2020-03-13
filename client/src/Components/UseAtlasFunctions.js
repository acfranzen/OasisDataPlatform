import React from 'react';
import { items } from '../stitch';

export default function displayData() {
  items
    .find({}, { limit: 1000 })
    .toArray()
    .then(docs => console.log(docs));
}

export function insertData() {
  items
    .insertOne({
      biologicalSex: 'Male',
      disability: '',
      dob: new Date(),
      email: 'test@test.com',
      ethnicity: 'test',
      name: 'test person',
      phone: '1234567899',
      programs: []
    })
    .then(res => console.log(res));
}
