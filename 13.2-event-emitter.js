const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.addListener('response', (data) => {
    console.log(`Data received by ${data}`)
})
customEmitter.addListener('response', (data) => {
    console.log(`Some other logic here by ${data}`)
})

customEmitter.emit('response', 'Fortune')
