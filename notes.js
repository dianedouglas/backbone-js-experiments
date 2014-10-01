// INSTANTIATE, GET, SET.
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

//use Model.set() to change attributes.
todo5.set('title', 'Here is a new title!!!');
todo5.set('completed', true);
console.log('Used Model.set() to change attributes on an instance.\n Title: ' + todo5.get('title') + ' completed: ' + todo5.get('completed'));

//more than one attribute. just like defaults hash.
todo4.set({
  title: 'Acid Bath Rules',
  completed: true
});
console.log('Changed more than 1 attribute at a time on an instance.\n Title: ' + todo4.get('title') + ' completed: ' + todo4.get('completed'));

// *********************************************************
console.log('\n\n\n\n\n\n\n\n\n\nNow dealing with Person model.');
//when any of these attributes alter the state of a model, a change event is triggered.
// To bypass triggers bound to the model, use .attributes method. Can also send {silent:true} to cancel individual change:attr events.

//SETTING EVENT LISTENER / CHANGE EVENTS.

//create a model, not an instance of a model? or just alternate way of instantiating?
// difference between var Todo = new Backbone.Model() and var Todo = Backbone.Model.extend({});

var Person = new Backbone.Model();
//run this function when the name attribute is changed.
Person.on("change:name", function(){
  console.log('Name changed.')
});

Person.set({name: 'Matt'});
console.log('Here is the new name: ' + Person.get('name')); //should be Matt.
Person.set({name: 'Batman'}, {silent: true}); //change to secret identity!
//check if the silent change occurred:
console.log('Person has changed their name: ' + Person.hasChanged('name'));
console.log('Person has changed something, anything: ' + Person.hasChanged(null));
console.log('Here is the new name: ' + Person.get('name')); //should be Batman.
console.log('\n\n');
// best practice to use Model.set(), or direct instantiation.

// bind listener to the model for its change event in initialize using:
//     this.on('change', function(){ /*code here*/ });
//     this.on('change:name', function(){ /*code here*/ });

var Friend = Backbone.Model.extend({
  defaults: {
    name: 'None',
    city: 'Faketown',
    state: 'FU'
  },
  initialize: function(){
    console.log('initialized.');
    this.on('change', function(){
      console.log('Something is different here... Attributes: ');
      console.log(this.toJSON());
    });
  }
});

var beth = new Friend();

console.log('Test defaults: ');
console.log(beth.toJSON());
beth.set('name', 'Beth');

beth.set('city', 'Portland');
beth.set('state', 'OR');
console.log("\n\nbeth's city: " + beth.get('city'));
console.log("beth's state: " + beth.get('state') + '\n\n\n\n');

// set more than one attribute at once and the listener is only triggered once.
//remember to separate by commas in set hash. initialize same as a normal js hash.
//apparently both of these work.
beth.set({
  'name': 'Elizabeth Gaunt',
  'city': 'Bitterwater',
  'state': 'Hell'
});
beth.set({
  name: 'Legolas',
  city: 'Rivendell',
  state: 'Middle Earth'
});

console.log('\n\n\n\n');
//also remember commas between properties in defaults hash, and between defaults, initialize, etc.
var Celebrity = Backbone.Model.extend({
  defaults: {
    name: 'stupid',
    status: 'cool',
    age: 21
  },
  initialize: function(){
    this.on('change:status', function(){
      console.log('this celebrity status has changed.');
      console.log('this.get(status) = ' + this.get('status'));
    });
  },
  //make a function to set an attribute.
  setStatus: function(newStatus){
    this.set({status: newStatus});
  }
});

console.log('\n\n\n\n');

var orlandoBloom = new Celebrity({
  name: 'Orlando Bloom',
  status: 'awesome',
  age: 33
});

console.log('initializing does not trigger the listner.\n\n');

orlandoBloom.set('status', 'adorable'); //listenter triggered
orlandoBloom.setStatus('lame'); //here too.

orlandoBloom.set('name', 'legolas');
console.log('had to print this change manually because it does not trigger the event listener. ' + orlandoBloom.get('name'));
