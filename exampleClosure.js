const Person=({name, age, job})=>{
    var _name=name;
    var _age=age;
    var _job=job;

    return{
        getName:()=>_name,
        getAge:()=>_age,
        getJob:()=>_job,


        setAge: newAge=>_age=newAge
    };
}

const me=Person({name:'Rasel', age:29, job:'Developer'});

console.log(me.getName())

console.log(me.setAge(56))