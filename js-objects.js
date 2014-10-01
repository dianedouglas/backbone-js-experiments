// normal primitive datatypes save by value, not reference.
var person = "Kobe";  
var anotherPerson = person; // anotherPerson = the value of person
person = "Bryant"; // value of person changed

console.log(anotherPerson); // Kobe
console.log(person); // Bryant

// vs objects which are stored by reference - location in memory.
var person = {name: "Kobe"};
var anotherPerson = person;
person.name = "Bryant";

console.log(anotherPerson.name); // Bryant
console.log(person.name); // Bryant
// anotherPerson just holds a reference to person. 
// It is storing a reference - the memory location. 
// so when person's property is changed, so is anotherPerson's.

/* object properties have 3 attributes set true by default.
—  Configurable Attribute: Specifies whether the property can be deleted or changed.
— Enumerable: Specifies whether the property can be returned in a for/in loop.
— Writable: Specifies whether the property can be changed.
*/


