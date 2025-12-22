//let expenses=[200,150,300];
{let expenses=[];

expenses.push(100);
expenses.push(200);
expenses.push(300);
expenses.push(1000);

//console.log(expenses);

let total=0;

for(let i=0;i<expenses.length;i++){
    total+=expenses[i];

   
}
console.log('Toatal spent:',total);
}

{
    let expenses=[200,600,790,400];
    let count=0;

    for(let i=0;i<expenses.length;i++){
        if(expenses[i]>200){
            count++;
        }
    }

    console.log('Expensive days:',count);

}