const numbers=[ 10, 12, 9, 5, 15, 10, 0, 3]

const ascending=(a,b)=>{
    if (a<b) return -1;
    if (a>b) return 1;
    return 0;
}

const sortedNumbers=numbers.slice().sort(ascending);
console.log(sortedNumbers)