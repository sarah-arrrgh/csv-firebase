var FirebaseWrapper = (function() {
var productRef

  // *Private
  function FirebaseWrapper() {
    productRef = new Firebase("https://ceres-price-list.firebaseio.com/Ceres")
  }

  //Push product info to firebase *Public
  FirebaseWrapper.prototype.createProduct = function(product) {
    productRef.push(product)
  }

  return FirebaseWrapper
})()
