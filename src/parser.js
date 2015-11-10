var csv = require('csv')
var fs = require('fs')
var Firebase = require('firebase')
var myDataRef = new Firebase('https://ceres-price-list.firebaseio.com/Ceres')
var parser = require('./ceres-parser')

var currentCategory
var currentBrand

fs.createReadStream("./csv/ceres-june.csv")
  .pipe(csv.parse())
  .pipe(csv.transform(function(record){
    var newCategory = parser.findCategory(record)
    var newBrand = parser.findBrand(record)
    var product = parser.createProductObject(record)

    if (newCategory) {
      currentCategory = newCategory
    } else if (newBrand) {
      currentBrand = newBrand
    } else if (product) { //we've hit a product
      product.brand = currentBrand
      product.category = currentCategory
      myDataRef.push(product)
    }
  }))

myDataRef.on("child_added", callback)
