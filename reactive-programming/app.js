import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';


const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  Meteor.startup(() => {
    Tasks.remove({});
  });
  Meteor.setInterval(() => {
    const now = new Date();
    Tasks.insert({
      text: "Hello world! " + now,
      createdAt: now,
    });
  }, 1000);
}

if (Meteor.isClient) {
  import './body.html';
  Template.body.helpers({
    tasks: Tasks.find(),
  });
}
