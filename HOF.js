const divide =(x, y)=>x/y;

const SecondArgIsNotZeron=func=>
        (...arg)=>{
            if(arg[1]===0){
                console.log('Error: Dividing by zero')
                return null;
            }

        return func(...arg);
}

const divideCorrect=SecondArgIsNotZeron(divide);
console.log(divideCorrect(7, 10));
console.log(divideCorrect(7, 0));