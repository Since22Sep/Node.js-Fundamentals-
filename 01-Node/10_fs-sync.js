const { log } = require('console')
const {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first)
// if the file is not there then node will create on or if the file is there then the content will be overwritten.
writeFileSync('./content/reult-sync.txt',`Here is the result : ${first},${second}`,{flag: 'a'})

console.log('done with this task')
console.log('starting the next one')