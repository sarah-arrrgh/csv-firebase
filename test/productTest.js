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
