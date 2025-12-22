let expenses=[450,780,560,890,480,760,590];
let total=0;
count=0
for(let i=0;i<expenses.length;i++){
    total+=expenses[i];

    if(expenses[i]>600){
        count++
    }
}
    console.log('Total Spent:',total);
    console.log('Days spent more than 300:',count);
