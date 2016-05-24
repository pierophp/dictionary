var language = require('../models/language');
var languageRepository = module.exports;

languageRepository.findAll = function (code) {
    return language.where({}).fetchAll();
};

languageRepository.findOneByCode = function (code) {
    return language.where({code: code}).fetch();
};
