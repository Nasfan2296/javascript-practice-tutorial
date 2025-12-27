/*
T:001
const hello=()=>{
    console.log('Hello, World');
}
hello();
hello();

// T:002
const hello=(name)=>{
    console.log(`Hello, ${name}`);
}

hello('Nasfan');
hello('Sabr');

// T:003
const add=(a,b)=>{
    return console.log(a+b);
}

add(5,6);
add('f','l');*/

// T:004
const area=(height,width)=>{
    return console.log(height*width);
}

area(20,80);

// T:005

const square=(n)=>{
    return console.log(n*n);
}

square(15);

// T:006
const cubes=(n)=>{
    return console.log(n*n*n);
}


cubes(6);

// T:007
const isEven=(num)=>{
    if(num%2 ==0){
        console.log(`${num} is Even`);
    }else{
        console.log(`${num} is odd`);
    }
}

isEven(77);
isEven(380);

// T:008
const isOdd=(num)=>{
    if(num%2 !=0){
        console.log(`${num} is Odd`);
    }else{
        console.log(`${num} is Even`);
    }
}

isOdd(99);
isOdd(120);

// T:009
const largeNum=(a,b)=>{
    if(a>b){
        console.log(`${a} is largest`);
    }else{
        console.log(`${b} is largest`);
    }
}

largeNum(12,8);

// T:010
const SmallNum=(a,b)=>{
    if(a>b){
        console.log(`${b} is smallest`);
    }else{
        console.log(`${a} is smallest`);
    }
}

SmallNum(12,8);
