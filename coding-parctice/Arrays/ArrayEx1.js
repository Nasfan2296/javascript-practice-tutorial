// T:001

/*let arr=['A','B','C','D','E'];
let arr1=[];
let arr2=['A','B','C','D','E'];
//console.log(arr2.length(3));
c=arr2.at('3');
console.log(c);

for(let i=0;i<arr2.length;i+1){
    console.log(arr2[i]);
}*/

// T:001

/*const arr1=new Array(1,2,3,3,4,5);
console.log(arr1);

// T:002
const arr2=new Array(3);
console.log(arr2);
console.log(arr2.length);

// T:003
const arr3=[10,89,34,56,78];
console.log(arr3[3]);

//T:004
for(let i=0;i<=arr3.length;i++){
    if(i%2 !=0){
        console.log(`Index at ${i} : ${arr3[i]}`);
    }
}

// T:005
arr3.unshift(78);
arr3.push(54);
console.log(arr3);

// T:006
arr3.shift();
arr3.pop();
console.log(arr3);*/

// T:007  destructuring 
const fruits=['Apple','Orange','Avacado','Banana','Badam','Berry','Kivi','Mango','Watermelon'];
const[,,,,,sixth]=fruits;
console.log(sixth);

// T:008
const [,,...lasteightFoods]=fruits;
console.log(lasteightFoods);

// T:009 shallow cloning
const cloneFoods=[...fruits];
console.log(cloneFoods);

// T:10 
fruits.length=0;
console.log(fruits);
