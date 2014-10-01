// models contain data for an app as well as logic around the data
// ex concept of a todo item, including attributes like title/completed.
// so it's a class.

// create model
var Todo = Backbone.Model.extend({});

// instantiate
var todo1 = new Todo();
// with data. like hash in ruby. new Thing({ attribute1: 'blah', attribute2: 'bleeh'});
var todo2 = new Todo({
  title: 'Test',
  completed: true
});


// for debugging, print it out.
console.log(JSON.stringify(todo1));
console.log(JSON.stringify(todo2));


// initialize() method optional, called automatically with a new instance like normal js.
var Todo = Backbone.Model.extend({
  initialize: function(){
    console.log("Initialized.");
  }
})

var todo3 = new Todo();
