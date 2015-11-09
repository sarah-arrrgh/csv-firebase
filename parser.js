var csv = require('csv')
var fs = require('fs')
var Firebase = require('firebase')
var myDataRef = new Firebase('https://ceres-price-list.firebaseio.com/Ceres')
var createProductObject = require("./productObject.js")

fs.createReadStream("./csv/ceres-june.csv")
  .pipe(csv.parse())
  .pipe(csv.transform(function(record){
    var product = createProductObject(record)
    var brand = createBrand(record)
    var category = createCategory(record)
    // myDataRef.push(product)
    console.log(category)
    console.log(brand)
    console.log(product)
  }))

