const employees=[
    {
        name:'Tanim',
        salary:'150000000000',
    },
    {
        name:'Rasel',
        salary:'20000000000',
    },
    {
        name:'Sobur',
        salary:'500800',
    },
    {
        name:'Juman',
        salary:'120800',
    },
]

const moreThenOneMillion=employee=>
    employee.salary>1000000;

    
const result=employees.every(moreThenOneMillion);
console.log(result)

/* const result=employees.some(moreThenOneMillion);
console.log(result) */


const form=[
    'Rasel',
    'Ahmed',
    'Softwere',
    /* ' ' */
]

const isNotEmpty=string=>!!string;

const every=form.every(isNotEmpty)
console.log(every)