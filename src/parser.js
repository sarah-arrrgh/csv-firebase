var csv = require('csv')
var fs = require('fs')
var Firebase = require('firebase')
var parser = require('./ceres-parser')
// var productRef = new Firebase("https://ceres-price-list.firebaseio.com/Ceres")
var allProducts = []
var gfProductCodes = []
var stream  = fs.createReadStream("./csv/ceres-june.csv")

stream
  .pipe(csv.parse())
  .pipe(csv.transform(function(record){
    var product = parser.parse(record)
    if (product != undefined) {
      if (product.section == "GLUTEN FREE & WHEAT FREE") {
        gfProductCodes.push(product.code)
        // product = undefined
      } else {
        allProducts.push(product)
        // productRef.push(product)
      }
    }
  }))

stream.on("end", function(){
  console.log("gf product codes:", gfProductCodes)
  console.log("all products", allProducts)
})

// now i have a list of all the product codes of items that are gluten free
// find them in the existing product list
//
