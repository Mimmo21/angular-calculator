var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope) {

 
  $scope.tot="";
  $scope.totINT=0;
  $scope.answer=0;

    
    $scope.upper=function(value){
      $scope.tot=$scope.tot+value;
    }//mostra tutto ciò che l'utente inserisce
    
    $scope.calcola=function(){
      $scope.totINT=eval($scope.tot);
      $scope.answer=$scope.totINT;
      $scope.tot= $scope.answer.toString();
    }//valutare l'input dell'utente
    
    $scope.clearAll=function(){
      $scope.val_string="";
      $scope.tot=0;
  } //pulisce tutto

}]);