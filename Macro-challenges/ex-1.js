const snack_price=20;
let wallet_money=230;
let snack_count=1;

while(wallet_money>snack_price){
    wallet_money-=snack_price;
    snack_count++;
}
console.log('No Of snacks bought:',snack_count);
console.log('wallet Money :',wallet_money);