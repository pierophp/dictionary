
angular.module("app.dictionary").controller("dictionaryCtrl", function ($scope, $http) {
    
    $scope.letters = [];
    
    $scope.words = [];
    
    var _loadLetters = function () {
          $http.get('/letters').success(function(data){
              $scope.letters = data;
          });
    };
    
    var _loadWords = function () {
          $http.get('/words').success(function(data){
              $scope.words = data;
          });
    };
    
    _loadLetters();
    _loadWords();
});