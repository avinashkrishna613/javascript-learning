// https://www.reddit.com/r/javascript/comments/u5yf8m/askjs_how_is_hoisting_significant_in_javascript/
// hoisting is nothing but able to use a variable before its declaration.
// basically declarations move to the top of execution context.
// when a function is entered into a stack frame, it will have its own execution context

// even functions, class constructs can be hoisted
// but in case of functions, even values are also hoisted
doStuff();
function doStuff() {
    console.log("doing stuff....");
}

doStuffArrow();
const doStuffArrow = () => {
    console.log("do stuff arrow...")
}

console.log(a); 
// var is a functional scope variable, so in js a variable declaration is moved upwards
// during the memory initialization phase
var a = 10;

function varfunc() {
    console.log(a); // undefined because, a will be of functional scope
    var a = 20;
    function varfunc1() {
        console.log(a); // undefined because a will have func scope
        var a = 30;
    }
    varfunc1();
    console.log(a); // a is initialized to 20
}

varfunc();

// basically let and const are also hoisted and assigned value as undefined but are not attached to global window object, so
// js engine will not be able to access them before initialization.
function letfunc() {
    console.log(a); // reference error because, a will be of block scope and in tdz and execution stops
    let a = 20;
    function letfunc1() {
        console.log(a); // reference error because, a will be of block scope and in tdz
        let a = 30;
    }
    letfunc1();
    console.log(a); // a is initialized to 20
}

letfunc();