function fetchUser(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({id:1,name:'Alex'});
        },1000);
    });
}

function fetchOrder(orderId){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve([
                {orderId:101},
                {orderId:102}
            ]);
        },1000);
    });
}

function fetchOrderDetails(orderId){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({orderId, item:'Laptap',price:1200})
        },1000);
    });
}


async function fetchUserFlow() {
    try {
        console.log('Fetching user...');
        const user=await fetchUser();

        console.log('Fetching orders for:',user.name);
        const orders=await fetchOrder(user.id);

        console.log('Fetching details in parallel ...');
        const orderDetails=await Promise.all
        (orders.map(o=>fetchOrderDetails(o.orderId)));

        console.log('Final Data:',{
            user,
            orders,
            orderDetails
        });

    } catch (error) {
        console.log('Something went wrong:',error);
    }
}

fetchUserFlow();