var csv = require('csv')
var fs = require('fs')
var Firebase = require('firebase')
var myDataRef = new Firebase('https://ceres-price-list.firebaseio.com/Ceres')

// fs.createReadStream("./csv/ceres-june.csv")
//   .pipe(csv.parse())
//   .pipe(csv.transform(function(record){
//     var product = createProductObject(record)
//     // myDataRef.push(product)
//     console.log(product)
//   }))

var createProductObject = function(record) {
  var object = {}

  if (record[0] != "" && record[3] == "") {
    // if record[0] == "Something" && record[3] == "" && it's not all caps, this is a notice - ignore it
    // if record[0] == "Something" && record[3] == "" && it's all caps, this is a category
    if (record[0] === record[0].toUpperCase()) {
      //do nothing
    } else {
      object.category = record[0]
      return object
    }
  }

  // if record[0] == "" && record[3] == "Something", this is a brand
  if (record[0] == "" && record[3] != "") {
    object.brand = record[3]
    return object
  }

  // if record[0] == "Something" && record[3] == "Something", this is a product
  if (record[0] != "" && record[3] != "") {
    object.code = record[0]
    object.description = record[3]
    object.unitSize = record[4]
    object.quantity = record[5]
    object.unitTradePrice = record[6]
    object.caseTradePrice = record[7]
    return object
  }

  // if record[0] == "" && record[3] == "", this is nothing, ignore it
}

module.exports = createProductObject
