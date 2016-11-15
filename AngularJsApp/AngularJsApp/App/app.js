var myApp = angular.module('myApp', []);

myApp.controller('productController', function ($scope) {
    $scope.isAddOrEdit = false; //this object is enabling or disableing 'the Grid' and 'Add new product' form
    $scope.products = [{ prodId: 101, prodName: 'Laptop', price: 4000 },
                       { prodId: 102, prodName: 'iPhone', price: 1500 },
                       { prodId: 103, prodName: 'iPhone6s', price: 2500 },
                       { prodId: 104, prodName: 'Mac', price: 500 },
                       { prodId: 105, prodName: 'itune', price: 150 }];

    $scope.newProduct = {}; //creating a new array object to hold the new item/product
    $scope.selectedProduct = null; // this object is checking the selected item/product is null or not
    $scope.isNewProduct = true; //this object is to make the 'prodId' read only
    screen.sortColumn = "id";//for sorting

    $scope.addNew = function () {
        $scope.newProduct = {};
        $scope.isAddOrEdit = true;
        $scope.isNewProduct = true;
    }

    $scope.cancel = function () {
        $scope.isAddOrEdit = false;
    }

    $scope.saveProduct = function () {
        $scope.products.push($scope.newProduct);
        $scope.newProduct = {};
        $scope.cancel();
    }

    $scope.viewProduct = function (prod) {
        $scope.selectedProduct = prod;
    }

    $scope.editProduct = function (id) {
        $scope.isNewProduct = false;
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].prodId == id) {
                $scope.newProduct = $scope.products[i];
                break;
            } else {
                $scope.newProduct = {};
                $scope.cancel;
            }
        }
        $scope.isAddOrEdit = true;
    }
    $scope.updateProduct = function () {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].prodId == $scope.newProduct.prodId) {
               // $scope.products[i] = $scope.newProduct.prodId;
                $scope.products[i].prodName = $scope.newProduct.prodName;
                $scope.products[i].price = $scope.newProduct.price;
                break;
            } else {
                $scope.newProduct = {};
                $scope.cancel;
            }
        }
        $scope.isNewProduct = {};
        $scope.isAddOrEdit = false;
        $scope.isNewProduct=true
    }
    $scope.deleteProduct = function (id) {
        //for (var i = 0; i < products.length; i++) {
          //  if ($scope.products[i].prodId == id) {
                $scope.products.splice($scope.products.indexOf(id));
            //}
        //}
     }

});


