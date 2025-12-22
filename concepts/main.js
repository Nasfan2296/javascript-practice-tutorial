const xhr= new XMLHttpRequest()

//https://mimic-server-api.vercel.app/users/2

xhr.open('GET','https://mimic-server-api.vercel.app/users/2')

xhr.onload=()=>{
    if(xhr.status ===200){
        // valid
        console.log(xhr.response)
    } else{
        console.log('XHR Error:',xhr.status)
    }
    
}

xhr.onerror=()=>{
    console.error('Request failed meow')
}

xhr.send();

