var csv = require('csv')
var fs = require('fs')

fs.createReadStream("./test.csv")
  .pipe(csv.parse())
  .pipe(csv.transform(function(record){
    var product = createProductObject(record)
  }))

var createProductObject = function(record){
  var object = {}
  object.code = record[0]
  object.description = record[3]
  object.unitSize = record[4]
  object.quantity = record[5]
  object.unitTradePrice = record[6]
  object.caseTradePrice = record[7]
  return object
}

