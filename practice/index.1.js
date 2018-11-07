function sayHello(potato, vanila){
    console.log("hello" + potato + "remember, arg, params" + vanila);
}

sayHello("yeongjo!", "heeeee");

function mtf(name, age){
    console.log(`hello ${name}, you ard ${age}!`);
}
mtf("yeongjo", 27)
// `` and '' and ""

function wtf(name, age){
    return `hello ${name}, you ard ${age}!`;
}
wtf("yeongjo", 27)

const calculator = {
    plus = function(a, b){
        return a + b;
    }
}

const plus = calculator.plus(5,5)
console.log(plus)

console.error("fuuuuck")