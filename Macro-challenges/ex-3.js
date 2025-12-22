const ride=150;
let money=1000;
let count=0;

while(money>150){
    money-=ride;
    count++;
}

console.log('Booked:',count);