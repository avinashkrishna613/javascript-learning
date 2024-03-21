function custom() { // i have a function which has this
    console.log(this.name);
}
let obj = { // i want to pass different objects each time so that it doesn't bind to same function
    name: "avinash"
}
var binded = custom.bind(obj); // now i bind this function to the object
binded();


// now what if the support for bind is not there.
// we will create a newBind function which will take an object as parameter and then applies to the function
var newBind = function (object) {
    let func = this;
    return function() {
        func.apply(object);
    }
}
Function.prototype.customBind = newBind;
custom.customBind(obj)();

// now since setImmediate is also deprecated we can create a pollyfill to that
const sampleCallback = () => {
    console.log("setimmediate()");
}
const id = setImmediate(sampleCallback);
console.log(id);

// lets say we don't have support
Function.prototype.customImmediate = function (callback) {
    return function () {
        setTimeout(callback, 0);
    };
}
customImmediate(sampleCallback)();