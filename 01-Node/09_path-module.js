const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/','subfolder','test.txt') // join all arg together and join the resulting path.
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder','text.txt')
// path.resolve accepts a sequence of path and resolves it into an absolute path.

console.log(absolute)
// we need it because our application is going to run in different environment so path to some kind of resource is going to be diff in my computer than in different machines.