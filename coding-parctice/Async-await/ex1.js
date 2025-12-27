/*let checkEven=new Promise((resolve,reject)=>{
    let number=5;
    if(number %2 ===0) resolve('The number is even!');
    else reject ('The numeber is odd!');
});

checkEven.then((message)=>console.log(message))
         .catch((error)=>console.log(error));*/


      /*   let checkAge=new Promise((resolve,reject)=>{
            let age=18;
            if(age>=18) resolve ('Person is adult');
            else reject('Person is children');
         });

         checkAge.then((message)=>console.log(message))
                 .catch((error)=>console.log(error));
        

                 function checkAge(age){
                    return new Promise((resolve,reject)=>{
                        if(age>=18){
                            resolve("Access granted");
                        }else{
                            reject('Acces denied');
                        }
                    });
                 }

                 checkAge(21)
                    .then(msg=>console.log(msg))
                    .catch(err=>console.log(err));
                 checkAge(16)
                    .then(msg=>console.log(msg))
                    .catch(err=>console.log(err));*/

                    async function checkAge(age) {
                        if(age>=18){
                            return "Access granted";
                        } else{
                            throw "Access denied"
                        }
                    }
                    
                    async function testAge() {
                        try {
                            const result=await checkAge(15);
                            console.log("SUCCESS:",result);
                        }catch(error){
                            console.log("ERROR:",   error);
                        }
                    }

                    testAge();