const fs = require('fs');
const http = require('http')

const server = http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', {encoding: 'utf8'})
    fileStream.on('open', (data)=> {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => res.end(err))
})

server.listen(5000)