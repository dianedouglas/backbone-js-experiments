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
// var Todo = Backbone.Model.extend({
//   initialize: function(){
//     console.log("Initialized.");
//   }
// })

// var todo3 = new Todo();

// use 'defaults' property for default values for model. case of incomplete user data.
var Todo = Backbone.Model.extend({
  defaults: {
    title: 'Hi there!',
    completed: false
  },
  initialize: function(){
    console.log("Initialized.");
  }
});
var todo4 = new Todo();
console.log(JSON.stringify(todo4));

//instantiate with some or all attributes.
var todo5 = new Todo({
  title: 'My name is mud.'
});
console.log(JSON.stringify(todo5));

//get attribute values from a model with .get() without JSON.stringify()
console.log('Fetching titles:' + todo4.get('title') + todo5.get('title'));

//get all attributes as an object with .toJSON() method:
var todo4Attributes = todo4.toJSON();
console.log('Print attribute object: ')
console.log(todo4Attributes)
//incidentally do separate lines for this.
// the attributes get lost and the object instance is printed if you try to print with a string in console.

//another example:
var todo5Attributes = todo5.toJSON();
console.log(todo5Attributes)
