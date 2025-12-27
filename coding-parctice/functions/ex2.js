/*let printName=function(){
    console.log('I am Nasfan');
};

var another=printName;

printName();
another();*/

/*




*/

//01: Calculator function

const calculator=(a,b,operator)=>{
    if(operator ==='+'){
        return a+b;
    }else if(operator ==='-'){
        return a-b;
    }else if(operator ==='*'){
        return a*b;
    }else if(operator === '/'){
        return a/b;
    }else{
        console.log('Invalid operations');
    }
}


console.log(calculator(120,34,'+')) ;
console.log(calculator(12,23,'*'));

// check prime
