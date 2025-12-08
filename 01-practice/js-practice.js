// variables  (var , let , const)


var age = 20;
age = 21; // allowed
// var can be redeclared
// confusing the  scope & cause bugs
console.log(age);

let marks =50 ;
marks=60;
//Use let when the value will change
// Block scoped
//Cannot be redeclared in same scope
console.log(marks);


const country='Srilanka';

// Cannot be reassigned
// Block scoped
// Must assign value immediately

const a=10;
//a=20;
//console.log(a); // show error


//But objects & arrays CAN change:

const numbers=[1,2,3];
numbers.push(4);
console.log(numbers);


// dom manipulations

// data types &  structures
// (strings,numbers , booleans , arrays ,objects)

const transaction={
    description:'Salary',
    amount:5000
};

const error={
    description:'Nor Found',
    statusCode:404,
    retry:false
};

// functions 

function calculateBalance(income,expenses){
  
    const balance=income-expenses;
    return balance;
}

calculateBalance(10000,5000);
calculateBalance(1000,200);



