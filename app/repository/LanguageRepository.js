var Language = require('../models/Language');
var LanguageRepository = module.exports;

LanguageRepository.findAll = function () {
    return Language
      .query();
};

LanguageRepository.findOneByCode = function (code) {
    return Language
      .query()
      .where('code', '=', code)
      .first();
};
