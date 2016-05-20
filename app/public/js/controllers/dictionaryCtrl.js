
angular.module("app.dictionary").controller("dictionaryCtrl", function ($scope, $http) {
    
    $scope.letters = [];
    
    var _loadLetters = function () {
          $http.get('/letters').success(function(data){
              $scope.letters = data;
          });
    };
    
    $scope.words = [];
    
    _loadLetters();
});