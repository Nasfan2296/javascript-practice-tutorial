// Fake API
// 1.Event loops

/*console.log('Start');
setTimeout(()=>{
    console.log("setTimeout Callback");
},1000);

Promise.resolve().then(()=>{
    console.log("Promise Resolved");
});

console.log('end');*/

//2. Delay of API

function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id:1,name:'Nasfan'})
        },2000);
    });
}

async function getUser() {
    console.log("Fetching user...");

    const user=await fetchUser();

    console.log("User fetched:",user);
}

getUser();