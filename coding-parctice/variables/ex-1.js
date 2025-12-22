// let can be re assigned
// const can be changed

const num=10;
//num=12;// type error

let i=120;
i=100;

// var is  function scoped
// let, const is block scoped

{
   var a=10;

}

console.log(a); // no limit , as not good to use

{
    let b=100;
    const c=23;
    console.log(c); // this will work
}

console.log(b); // this shows reference error

