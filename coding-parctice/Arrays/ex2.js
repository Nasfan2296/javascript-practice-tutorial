//T-11
let arr=[1,2,3,4,5,6,7,8,9,10];

for(let i=0;i<arr.length;i++){
    if(arr[i]===5){
        
        arr.length=6;
        break;
    }
}

console.log(arr);

//T-12  splice (start,end)
arr.splice(0,arr.length);
console.log(arr);

// T-13
arr.length=0;
console.log(arr);

while(arr.length){
    arr.pop();
}
console.log(arr);

while(arr.length){
    arr.shift();
}
console.log(arr);

arr=[];
console.log(arr);


// T-14
console.log([].concat([]));

// T-15 check partially if items is in array
let arr=['Apple','Banana','Orange'];

const result=arr.some(item=>item.includes('App'));
console.log(result);

// T-16 
//slice - create a clone of array and modify that
// splice- just change the original array


// T-17
let a=['a1','b1','a10','c3'];

let asc=[...a].sort();
let desc=[...a].sort().reverse();
console.log(asc);
console.log(desc);

// T-18 Sparse arrays have missing indexes. Dense the array
let Sparse=[];
Sparse[5]='hello';
console.log(Sparse);

let items=[];
items[7]='Nasfan';
console.log(items);

//  T-19
let b=new Array(5).fill(1);
console.log(b);

b.fill('X',1,3);
console.log(b);

// T-20
let babe=[1,2,3,4];
let c=babe.toString();
console.log(c);

d=babe.join('-');
console.log(d);

e=JSON.stringify(babe);
console.log(e);