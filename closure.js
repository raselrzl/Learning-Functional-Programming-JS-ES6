const accessValue=()=>{
    const numb=42;
    return ()=> console.log(`number is ${numb}` )

}

const val=accessValue()
val()