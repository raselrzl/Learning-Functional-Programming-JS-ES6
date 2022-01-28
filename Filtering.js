const numbers=[1,2,3,4,5,6,7,8,9,10];

const isEven=x=>x%2===0;
/* const evenNumbers=numbers.filter(isEven);
console.log(evenNumbers) */

const evenNumbers=numbers.filter(x=>x%2===0);
console.log(evenNumbers)

const words=[
    'RaselZeras','Tanim', 'SoburSik', 'we123456ew', 123456897, 
]
/* const isLong=word=>word.length>5;

const longWords=words.filter(isLong);
//console.log(longWords) */

const createLengthTest=minLength=>
    word=>word.length>minLength;

const longW=words.filter(createLengthTest(5));

console.log(longW)