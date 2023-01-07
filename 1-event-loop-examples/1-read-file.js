const { readFile } = require('fs')

console.log('first task')
readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err) {
        console.log(err)
    }
    console.log(result);
    console.log('completed first task')
})
console.log('starting new task')