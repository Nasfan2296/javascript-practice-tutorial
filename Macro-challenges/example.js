{let phonePrice=500;
let bankBalance=2000;

let spend=bankBalance-phonePrice;
console.log(spend);
}

{
   
    function addTax(price){
        return price * 1.08;
    }

    console.log(addTax(100));

    
}

{
    let bankBalance=500;
    let phonePrice=600;

    if(bankBalance>=phonePrice){
        console.log('Buy the phone');
    }else{
        console.log('Dont By the phone');
    }
}


{
    let i=1;

    while(i<6){
        console.log(i);
        i++;
    }
}

{
    let bankBalance=1000;
    let phonePrice=300;

    while(bankBalance>=phonePrice){
        console.log('Bought a phone');
        bankBalance=bankBalance-phonePrice;
    }

    console.log('Money Left :',bankBalance);
}


{
   let bankBalance=1000;
   let phonePrice=300;
   let accesoryPrice=50;
   let totalSpent=0;

   while(bankBalance>=phonePrice){
    bankBalance-=phonePrice;
    totalSpent+=phonePrice;

    if(totalSpent<700){
        bankBalance-=accesoryPrice;
        totalSpent+=accesoryPrice;
    }

   }

   console.log('Total spent:',totalSpent);

}