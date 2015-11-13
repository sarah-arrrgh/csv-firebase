var chai = require("chai")
var expect = chai.expect
var parser = require("../src/ceres-parser.js")

var section = ["SECTION","","","","","","",""]
var category = ["","","","CATEGORY","","","",""]
var brand = ["","","","Brand","","","",""]
var product = [ 12345,"",,"Coconut Milk","200ml","Ctn 6","$2.30","$13.80" ]

describe("Create Product Object", function(){
  var productObject = parser.createProductObject(product)

  it("Creates a valid product code", function(){
    expect(productObject).to.have.property("code")
      .that.equals(12345)
  })

  it("Creates a valid product description", function(){
    expect(productObject).to.have.property("description")
      .that.equals("Coconut Milk")
  })

  it("Creates a valid product unit size", function(){
    expect(productObject).to.have.property("unitSize")
      .that.equals("200ml")
  })

  it("Creates a valid product quantity", function(){
    expect(productObject).to.have.property("quantity")
      .that.equals("Ctn 6")
  })

  it("Creates a valid product unit trade price", function(){
    expect(productObject).to.have.property("unitTradePrice")
      .that.equals("$2.30")
  })

  it("Creates a valid product case trade price", function(){
    expect(productObject).to.have.property("caseTradePrice")
      .that.equals("$13.80")
  })
})

describe("Find Section", function(){

  it("returns undefined when passing in a valid product", function(){
    expect(parser.findSection(product)).to.be.undefined
  })

  it("returns undefined when passing in a valid brand", function(){
    expect(parser.findSection(brand)).to.be.undefined
  })

  it("returns undefined when passing in a valid category", function(){
    expect(parser.findSection(category)).to.be.undefined
  })

  it("returns a section when passing in a valid section", function(){
    expect(parser.findSection(section)).to.equal("SECTION")
  })
})

describe("Find Category", function(){

  it("returns undefined when passing in a valid product", function(){
    expect(parser.findCategory(product)).to.be.undefined
  })

  it("returns undefined when passing in a valid brand (which is the same as category but not upper case)", function(){
    expect(parser.findCategory(brand)).to.be.undefined
  })

  it("returns undefined when passing in a valid section", function(){
    expect(parser.findCategory(section)).to.be.undefined
  })

  it("returns a category when passing in a valid category (upper case)", function(){
    expect(parser.findCategory(category)).to.equal("CATEGORY")
  })
})

describe("Find Brand", function(){

  it("returns undefined when passing in a valid product", function(){
    expect(parser.findBrand(product)).to.be.undefined
  })

  it("returns undefined when passing in a valid category (which is the same as brand but upper case)", function(){
    expect(parser.findBrand(category)).to.be.undefined
  })

  it("returns undefined when passing in a valid section", function(){
    expect(parser.findBrand(section)).to.be.undefined
  })

  it("returns a brand when passing in a valid brand (not upper case)", function(){
    expect(parser.findBrand(brand)).to.equal("Brand")
  })
})

describe("Supplier", function(){

  it("returns Ceres as the supplier on any created object", function(){
    var parsedProduct = parser.parse(product)
    expect(parsedProduct).to.have.property("supplier")
      .that.equals("Ceres")
  })
})

describe("Gluten-Free Boolean", function(){

  it("sets product GF status to false", function(){
    var parsedProduct = parser.parse(product)
    expect(parsedProduct).to.have.property("glutenFree")
      .to.be.false
  })
})

describe("Parser", function(){

  it("remembers current section",function(){
    parser.parse(section)
    var parsedProduct = parser.parse(product)
    expect(parsedProduct).to.have.property("section")
      .that.equals("SECTION")
  })

  it("remembers current category",function(){
    parser.parse(category)
    var parsedProduct = parser.parse(product)
    expect(parsedProduct).to.have.property("category")
      .that.equals("CATEGORY")
  })

  it("remembers current brand",function(){
    parser.parse(brand)
    var parsedProduct = parser.parse(product)
    expect(parsedProduct).to.have.property("brand")
      .that.equals("Brand")
  })
})
