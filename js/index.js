var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope) {

  $scope.val_string="";
  $scope.tot=0;
  $scope.answer=0;
  $scope.done = false;
    
    $scope.upper=function(value){
      $scope.val_string=$scope.val_string+value;
    }//mostra tutto ciò che l'utente inserisce
    
    $scope.calcola=function(){
      $scope.tot=eval($scope.val_string);
      $scope.answer=$scope.tot;
      $scope.done = true;
    }//valutare l'input dell'utente
    
  $scope.clearAll=function(){
    $scope.val_string="";
    $scope.tot=0;
  } //pulisce tutto

}]);