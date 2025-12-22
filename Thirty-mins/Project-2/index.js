/*const command = process.argv[2]

if (command === 'add') {
  console.log('Adding note!')
} else if (command === 'remove') {
  console.log('Removing note!')
}
*/


const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { describe, demandOption } = require('yargs');

const argv = yargs(hideBin(process.argv))
  .version('1.1.0')
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
   handler:function(argv){
    console.log('Title:'+argv.title)
    console.log('Body:'+argv.body)
   },
    }
).parse();
