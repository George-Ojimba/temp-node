//Globals  - No window in node.

// __dirname - Path to current directory
// __filename - file name 
// require    - Functn to use moduls (CommonJS)
// module     - Info. about current module(file)        
// process    - Info. about env where the program is being executed.    
// OS module  

//common JS  - every file in node is a module by default 
//Modules - Encapsulate Code (only share the minimum )
const names = require('./modules-name')
const sayHi = require('./mdoules-utils')
/*console.log(data);

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter) 

// OS module 
const os = require('os')

//info about current user 
const user = os.userInfo()
console.log(user);

//method returns the system uptime in second
console.log(`The system uptime is ${os.uptime()} seconds`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMen: os.freemem()
}
console.log(currentOS);

//Path module
const path = require('path')
console.log(path.sep);

const filePath = path.join('content','subfolder','test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content','subfolder', 'test.txt')
console.log(absolute);

//File system (fs) -- Synchronous 
const {readFileSync,writeFileSync} = require('fs')
const { writeFile } = require('fs/promises')
//readFileSync - takes two params (filepath and data encoding format)
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf8')

//writeFileSync - takes 3 params (filepath & content & flag): Please note that it overides the content in the file. To append, add the flag parameter which is an object
writeFileSync(
  './content/result-sync.txt',`Here is the result : ${first}, ${second}`,
  {flag: 'a'}
)
console.log(first, second)

*/

//File system (fs) -- Asynchronous

const {readFile,writeFile} = require('fs');
//readFile takes 3 params - path, encoding format and a callback func

readFile('./content/first.txt', 'utf-8', (err, result)=> {
  if(err){
    console.log(err);
    return
  }
  console.log(result);
  const first = result
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err); 
      return;
    }
    console.log(result);
    const second = result;
    writeFile('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,
    (err,result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    })
  })
})