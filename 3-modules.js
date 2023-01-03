const names = require('./4-names')
const sayHi = require('./5-utils')
const {items, singlePerson:person} = require('./6-alternative-flavour')

sayHi(names.john)
require('./7-mind-grenade')

sayHi(names.peter)
console.log(person)