/* const map=(arr,func)=>{
    let newArr=[];
    for (let i=0; i<arr.length;i++){
        const result=func(arr[i]);
        newArr.push(result);
    }
    return newArr;
}
console.log(map([1,2,3],x=>x*2)); */

const map=(arr,func)=>
   arr.reduce((arr, x)=>[
       ...arr,
       func(x),
   ],[])

console.log(map([1,2,3],x=>x*2));
console.log(map([5,6,7,8,9,10],x=>-x));
console.log(map(['a','b'],x=>x.toUpperCase()));