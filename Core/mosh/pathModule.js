const path = require('path');

var pathObject = path.parse(__filename);

console.log(pathObject.root)
console.log(pathObject.dir)
console.log(pathObject.base)
console.log(pathObject.ext)
console.log(pathObject.name)

