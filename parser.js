var parse = require('csv-parse')
var fs = require('fs')

fs.readFile("./test.csv","utf8",function(err, file){
  console.log(file)
})
