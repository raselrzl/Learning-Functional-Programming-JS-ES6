const employees=[
    {
        name:'Tanim',
        age:36,
        Job:'developer',
        salary:70000,
    },
    {
        name:'Rasel',
        age:39,
        Job:'developer',
        salary:95000,
    },
    {
        name:'Sobur',
        age:34,
        Job:'Eng',
        salary:70000,
    },
    {
        name:'Juman',
        age:31,
        Job:'Mar',
        salary:60000,
    },
    {
        name:'Anwar',
        age:44,
        Job:'developer',
        salary:100000,
    },
]

const developers=employees.filter(employee=>
   employee.Job==='developer' );
const developerSalary=developers.map(developer=>developer.salary);

const totalSalary=developerSalary.reduce((acc, x)=>
    acc+x
,0)

const averageDevSalary=totalSalary/developers.length;
console.log(averageDevSalary)
