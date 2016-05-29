angular.module("app.dictionary").controller("dictionaryCtrl", function ($scope, $http, words) {
    
    $scope.letters = [];
    
    $scope.words = words.data;
    
    var _loadLetters = function () {
        
        
        
          $http.get('/letters').success(function(data){
              $scope.letters = data;
          });
    };
    
    _loadLetters();
});