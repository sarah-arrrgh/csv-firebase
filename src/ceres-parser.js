parser = {
  findCategory: function(record) {
    if (record[0] == "" && record[3] != "") {
      if(record[3] === record[3].toUpperCase()) {
        return record[3]
      }
    }
  },
  findBrand: function(record) {
    if (record[0] == "" && record[3] != "") {
      if(record[3] !== record[3].toUpperCase()) {
        return record[3]
      }
    }
  },
  createProductObject: function(record) {
    var object = {}

    if (record[0] != "" && record[3] != "" && record[1] == "") {
      object.code = record[0]
      object.description = record[3]
      object.unitSize = record[4]
      object.quantity = record[5]
      object.unitTradePrice = record[6]
      object.caseTradePrice = record[7]
      return object
    }
  }
}

module.exports = parser
