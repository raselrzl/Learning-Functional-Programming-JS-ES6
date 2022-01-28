const person={
    name:'Rasel Ahmed',
    age:29,
    hairColor:'black',
    eyeColor:'blue',

};
const carrerData={
    name:'Zeras',
    title:'developer',
    company:'ABC Softwere',
};

/* const personWithData={
    ...person,
    ...carrerData,
}


const personWithData={
    name:person.name,
    ...carrerData,
} */

const personWithData={
    ...person,
    ...carrerData,
}

console.log(personWithData);


const numbers=[1,2,3,4,5];
const newNumbers=[
    0,...numbers,6,
]
console.log(newNumbers)