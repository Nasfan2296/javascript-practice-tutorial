// fetch() API syntax

fetch(URL,options)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.error(error))

// Using async/await with fetch

async function fetchData(url) {
    
    try{
    const response=await fetch(url,options);
    const data=await response.json()
    console.log(data);

    }catch(error){
     console.error(error);
    }

}

fetchData('http://localhost:3000/posts');

// again own try

fetch(url)
    .then(response=>response.json)
    .then(data=>console.log(data))
    .catch(error=>console.log(error))


// http methods

// fetch Usage : Getting resources
