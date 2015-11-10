var View = (function(){
  function View(){

  }

  View.prototype.displayAllProducts = function(snapshot) {
    var product = new Product(snapshot.val())
    displayProductDetails(product)
  }

  function displayProductDetails(product) {
    $("displayProductsDiv")
      .append("Product code: " + product.code)
      .append("Product description: " + product.description)
      .append("Unit size: " + product.unitSize)
      .append("Quantity: " + product.quantity)
      .append("Unit trade price: " + product.unitTradePrice)
      .append("Case trade price: " + product.caseTradePrice)
  }

  function scrollToTop() {
    $("#displayProductsDiv")[0].scrollTop = $("#displayProductsDiv")[0].scrollHeight
  }


  return View
})()
