const numbers=[1,2,3,4,5,6,7,8,9]

const sum=numbers.reduce((acc, x)=>{
    console.log(`acc is ${acc}`);
    console.log(`x is ${x}`);

    return acc+x;

}, 0)
console.log(sum)


/* for multiplication/product value is 1 */