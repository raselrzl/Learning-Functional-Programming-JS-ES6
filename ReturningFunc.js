/* const x=5;
const name='Rasel';
const SayHello=()=>console.log('Hello!')
doSomething(SayHello); */



/* const createPrinter=()=>()=>console.log('I am a function')

console.log(createPrinter()) */

const createMultiplier=Y=>x=>x*Y;

const double=createMultiplier(2);
const triple =createMultiplier(3)


console.log(double(3))
console.log(triple(5))