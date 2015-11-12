var csv = require('csv')
var fs = require('fs')
var Firebase = require('firebase')
var parser = require('./ceres-parser')
var productRef = new Firebase("https://ceres-price-list.firebaseio.com/Ceres")

fs.createReadStream("./csv/ceres-june.csv")
  .pipe(csv.parse())
  .pipe(csv.transform(function(record){
    var product = parser.parse(record)
    productRef.push(product)
    // createProduct(product)
  }))
