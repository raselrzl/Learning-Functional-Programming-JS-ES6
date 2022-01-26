const sayhello=name=>console.log('hello'+name)


const myFun=true
    ? ()=> console.log('first option')
    : ()=> console.log('sec option')



const DEVELOPMENT=true;

const fetchDataReal=()=>{

}

const fetchDataFake=()=>({
    name:"Rasel",
    age: 29,
})


const fetchData=DEVELOPMENT
   ? fetchDataFake
   : fetchDataReal;




/* --------------------------------- */

const double =x=>x*2;

const subtractOne =x=>x-1;

const triple =x=>x**2;

const add =x=>x+5;


const myNum=42;

const doubled=double(myNum)
const minus1=double(subtractOne)

const funArray=[
    double,
    subtractOne,
    triple,
    add,
    Math.sqrt,
];

var number=42;
funArray.forEach(func=>number=func(number));

