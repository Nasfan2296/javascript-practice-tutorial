const bookPrice=200;
const penPrice=50;
let walletMoney=1000;

let books=0;
let pens=0;

while(walletMoney>bookPrice){
    walletMoney-=bookPrice;
    books++;

    if(walletMoney>300){
        walletMoney-=penPrice;
        pens++
    }
}

console.log('Books:',books);
console.log('Pens:',pens);

