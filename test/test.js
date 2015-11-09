var chai = require("chai")
var expect = chai.expect
var createProductObject = require("../parser.js")

var product = [ 12440,,,"Rice & Quinoa Drink Enriched","946ml","Ctn 6","$4.32","$25.92" ]

describe("Create product object", function(){
  it("Create a valid product from an array", function(){
    var productObject = createProductObject(product)
    expect(productObject).to.have.property("code")
      .that.equals(12440)
  })
})
