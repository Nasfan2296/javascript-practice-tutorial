//console.log('Hello Node.js!');

// require-  This function is used to load in a module and get access to its contents
//require can also be used to load in JavaScript files you’ve created
//const fs=require('fs');

//fs.writeFileSync('notes.txt','I live in Srilanka');

/*const check=function(){
    console.log('Doing some work...')
}

module.exports=check;*/


/*const command=process.argv[2]

if(command === 'add'){
    console.log('Adding note!')
}else if(command ==='remove'){
    console.log('Removing note!');
}*/

 /*yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: { describe: 'Note title', demandOption: true, type: 'string' },
        body: { describe: 'Note body', demandOption: true, type: 'string' }
    },
    handler(argv) {
        // Access data cleanly via argv object
        console.log(`Adding: ${argv.title}`);
    }
}).parse();*/

const command=process.argv[2];
if(command==='add'){
    console.log('Adding Note!')
}else if(command ==='remove'){
    console.log('Removing note!');
}else {
    console.log('Unknown command');
}
