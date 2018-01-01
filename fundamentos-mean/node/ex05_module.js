console.log(this === global);
console.log(module === this);
console.log(module.exports === this);

this.sayHello = function() {
    console.log('Say Hello');
}