const currentInputValues={
    firstName:'',
    lastName:'',
    zipCode:'',
    state:'',

}

const inputCriteria={
    firstName:[
        value=>value.length>=2
        ?''
        :'First name At least two character'
    ],
    lastName:[
        value=>value.length>=2
        ?''
        :'Last name At least two character'
    ],
    zipCode:[
        value=>value.length===5
        ?''
        :'zipCode must be five character'
    ],
    state:[
        value=>value.length===2
        ?''
        :'state must be twocharacter'
    ],
}

const getErrorMEssages=(input, criteria)=>{
    return Object.keys(input).reduce((acc, fieldName)=> [
        ...acc,
        ...criteria[fieldName].map(test=>
            test(input[fieldName])),
    ] ,[]);
}

console.log(getErrorMEssages(currentInputValues, inputCriteria))