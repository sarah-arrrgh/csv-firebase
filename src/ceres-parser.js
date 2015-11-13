parser = {

  currentSection: "",
  currentCategory: "",
  currentBrand: "",
  supplier: "Ceres",

  parse: function(record) {
    var newSection = parser.findSection(record)
    var newCategory = parser.findCategory(record)
    var newBrand = parser.findBrand(record)
    var product = parser.createProductObject(record)

    if (newSection) {
      this.currentSection = newSection
    } else if (newCategory) {
      this.currentCategory = newCategory
    } else if (newBrand) {
      this.currentBrand = newBrand
    } else if (product) {
      product.glutenFree = false
      product.brand = this.currentBrand
      product.category = this.currentCategory
      product.section = this.currentSection
      product.supplier = this.supplier
      return product
    }
  },

  findSection: function(record) {
    if (record[0] != "" && record[3] == "") {
      if(record[0] === record[0].toUpperCase()) {
        return record[0]
      }
    }
  },

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
