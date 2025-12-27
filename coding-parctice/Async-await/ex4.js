// Challenge 6: Unstable API with Retry & Timeout

function unstableFetchUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success=Math.random()>0.5;

            if(success){
                resolve({id:1,name:'Alex'});
            }else{
                reject ("Network error");
            }
        },1000);
    })
}

async function fetchWithRetry(retries) {
    for (let attempt=1;attempt<=retries;attempt++){
        try{
            console.log(`Attempt ${attempt}...`);
            const user=await unstableFetchUser();
            return user;

        } catch (err){
            console.log('Fialed:',err);

            if(attempt === retries){
                throw 'All retries failed';
            }
        }
    }
}