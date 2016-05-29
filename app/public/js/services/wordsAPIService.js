angular.module("app.dictionary").factory("wordsAPI", function ($http) {
	
	var _getWords = function (type, fromLang, toLang, letter) {
		return $http.get("/words/" + type + "/"+ fromLang + "/" + toLang + "/?letter=" + letter);
	};

	return {
		getWords: _getWords
	};
});