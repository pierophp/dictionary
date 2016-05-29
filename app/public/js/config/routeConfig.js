angular.module("app.dictionary").config(function ($routeProvider) {
    
    $routeProvider
     .when('/', {
            templateUrl: 'view/words.html',
            controller: 'dictionaryCtrl'
    })

    .when('/about', {
            templateUrl: 'view/about.html',
            controller: 'dictionaryCtrl'
    })
	
	.when("/words/:type/:fromLang/:toLang/:letter", {
        
		templateUrl: "view/words.html",
		controller: "dictionaryCtrl",
		resolve: {
            
			words: function (wordsAPI, $route) {
                
				var type = $route.current.params.type;
                var fromLang = $route.current.params.fromLang;
                var toLang = $route.current.params.toLang;
                var letter = $route.current.params.letter;
                
                return wordsAPI.getWords(type, fromLang, toLang, letter);
			}
		
		}
	});
});