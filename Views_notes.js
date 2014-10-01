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
