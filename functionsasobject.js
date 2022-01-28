const add=(x,y,z)=>x+y+z
console.log(add.length)
console.log(add.toString())

console.log(add.call(null, 1,2,3))

console.log(add.apply(null, [1,2,3]))

const args=[1,2,3]

console.log(add(...args))

const add1=add.bind(null, 2); //to set new value
console.log(add1(2,3));

