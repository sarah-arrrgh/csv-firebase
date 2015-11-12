var csv = require('csv')
var fs = require('fs')
var parser = require('./ceres-parser')

fs.createReadStream("./csv/ceres-june.csv")
  .pipe(csv.parse())
  .pipe(csv.transform(function(record){
    var product = parser.parse(record)
    createProduct(product)
  }))
