var chai = require("chai")
var expect = chai.expect
var parser = require("../src/ceres-parser.js")

var product = [ 12440,"",,"Rice & Quinoa Drink Enriched","946ml","Ctn 6","$4.32","$25.92" ]

describe("Create product object", function(){
  var productObject = parser.createProductObject(product)

  it("Create a valid product code", function(){
    expect(productObject).to.have.property("code")
      .that.equals(12440)
  })
  it("Create a valid product description", function(){
    expect(productObject).to.have.property("description")
      .that.equals("Rice & Quinoa Drink Enriched")
  })
  it("Create a valid product unit size", function(){
    expect(productObject).to.have.property("unitSize")
      .that.equals("946ml")
  })
  it("Create a valid product quantity", function(){
    expect(productObject).to.have.property("quantity")
      .that.equals("Ctn 6")
  })
  it("Create a valid product unit trade price", function(){
    expect(productObject).to.have.property("unitTradePrice")
      .that.equals("$4.32")
  })
  it("Create a valid product case trade price", function(){
    expect(productObject).to.have.property("caseTradePrice")
      .that.equals("$25.92")
  })
})

describe("findCategory", function(){
  it("returns undefined when passing in a valid product", function(){
    expect(parser.findCategory(product)).to.be.undefined
  })

  it("returns undefined when passing in a valid brand (which is the same but not upper case)", function(){
    var category = ["","","","Piet","","","",""]
    expect(parser.findCategory(category)).to.be.undefined
  })

  it("returns a category when passing in a valid category (upper case)", function(){
    var category = ["","","","PIET","","","",""]
    expect(parser.findCategory(category)).to.equal("PIET")
  })

})

describe("findBrand", function(){
  it("returns undefined when passing in a valid product", function(){
    expect(parser.findBrand(product)).to.be.undefined
  })

  it("returns undefined when passing in a valid category (which is the same but upper case)", function(){
    var brand = ["","","","PIET","","","",""]
    expect(parser.findBrand(brand)).to.be.undefined
  })

  it("returns a brand when passing in a valid brand (not upper case)", function(){
    var brand = ["","","","Insert pun here","","","",""]
    expect(parser.findBrand(brand)).to.equal("Insert pun here")
  })


})
