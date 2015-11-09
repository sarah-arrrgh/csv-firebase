var createCategory = function(record) {
  var object = {}

  if (record[0] == "" && record[3] != "") {
    if(record[3] === record[3].toUpperCase()) {
      object.category = record[3]
      return object
    }
  }
}

module.exports = createCategory
