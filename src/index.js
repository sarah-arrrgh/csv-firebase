var parser = require('./ceres-parser')

//creates a new product - pushes product to firebase
$(function() {
  var firebaseWrapper = new FirebaseWrapper()

  createProduct(firebaseWrapper)
  onProductAdded(firebaseWrapper)

})

function createProduct(firebaseWrapper, product) {
  firebaseWrapper.createProduct()
}

function onProductAdded(firebaseWrapper) {
  firebaseWrapper.onProductAdded(function(snapshot) {
    var product = snapshot.val()
    console.log(product)
    var view = new View()
  view.displayProductDetails(snapshot)
  })
}
