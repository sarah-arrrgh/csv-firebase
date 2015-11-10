var currentCategory
var curentBrand

var isCatergory = function(record) {
  currentCategory = record[3]
}

var isBrand = function(record) {
  curentBrand = record[3]
}

var isProduct = function(record){
  object.category = currentCategory
  object.brand = currentBrand
  object.code = record[0]
  object.description = record[3]
  object.unitSize = record[4]
  object.quantity = record[5]
  object.unitTradePrice = record[6]
  object.caseTradePrice = record[7]
  return object
}
