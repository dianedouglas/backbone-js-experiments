// Backbone views don't contain html, they contain the logic behind the presentation of model data to the user.
// usually templating. underscore microtemplates, mustache, jquery-tmpl
// bind the view's render() method to a model's change() event so view reflects model.

// create view - extend View, just like Model.
var ToDoViewSkeleton = Backbone.View.extend({
	//initialize stuff in view object thing: 'stuff', things: {first: 'thing', second: 'thing'}, etc
});

var todoView = new ToDoViewSkeleton();

// all views must have a dom element reference stored in the el property. 
// 1. do this by either creating a new dom element with the object at creation and inserting into DOM all at once (fast rendering)
// 2. or a reference can be made to an element that already exists.

// 1. create new el dom element with object by setting the tagName, and if you like className, id.
var ToDoView = Backbone.View.extend({
	tagName: 'ul', //required, but default 'div'
	className: 'container hi', //optional. multiple ok.
	id: 'todos'
});
// creates a ul with class container and id todos.
var todoView = new ToDoView();
console.log(todoView.el); //prints '<ul id="todos" class="container hi"></ul>'
// creates the element but doesn't append it to the dom.

// if element already exists you can set el to a css selector
var ToDoViewSkeletonX = Backbone.View.extend({
	el: '#footer'
});
// or set it to an existing element when creating the view.
var todoXView = new ToDoView({el: $('#footer')});

//When declaring a view, options, el, tagName, id and className can all be functions.


// also frequently need to run jquery functions on the el element and elements nested within it.
// get the jquery location of the view element:
// view.$el

// get nested elements:
// view.$(selector)
// same as $(view.el).find(selector)

// use setElement if you need to change to a different DOM element. 

// We create two DOM elements representing buttons
// which could easily be containers or something else
var button1 = $('<button></button>');
var button2 = $('<button></button>');

var View = Backbone.View.extend({
	events: {
		click: function(e) {
			console.log(view.el === e.target);
			console.log('click event triggered.')
		}
	}
});

//make new instance of view. set on initialize to button1. triggering a click on button1 triggers click event in view.
var view = new View({el: button1});
button1.trigger('click');

//reset view to use button2 as el. now triggering a click on button 2 triggers a click event in view. not in button 1 anymore.
view.setElement(button2);
button2.trigger('click');
button1.trigger('click');


// el property represents the markup portion of the view that will be rendered.
// to get the view to actually render to the page, you need to add it as a new element or append it to an existing one.

// We can also provide raw markup to setElement
// as follows (just to demonstrate it can be done):
// var view = new Backbone.View;
// view.setElement('<p><a><b>test</b></a></p>');
// console.log(view.$('a b').html()); // outputs "test"

console.log('\n\n\n')






