
/*{ //12j
 const multiply=(a,b)=>{console.log(`${a}*${b}=${a*b}`);}

multiply(5,8);
multiply(7,10);
}*/

//12l

const countPositive=(arr)=>{
    let count=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            count++;
        }
    }
    console.log(count);
}

countPositive([2,-8,-9,7,9]);
countPositive([-2,3,-5,7,10]);

// 12


