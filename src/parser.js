var csv = require('csv')
var fs = require('fs')
var Firebase = require('firebase')
var myDataRef = new Firebase('https://ceres-price-list.firebaseio.com/Ceres')
var parser = require('./ceres-parser')

fs.createReadStream("./csv/ceres-june.csv")
  .pipe(csv.parse())
  .pipe(csv.transform(function(record){
    var product = parser.parse(record)
    myDataRef.push(product)
  }))
