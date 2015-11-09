var createBrand = function(record) {
  var object = {}

  if (record[0] == "" && record[3] != "") {
    if(record[3] !== record[3].toUpperCase()) {
      object.brand = record[3]
      return object
    }
  }
}

module.exports = createBrand
