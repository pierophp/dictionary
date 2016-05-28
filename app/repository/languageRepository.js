var Language = require('../models/Language');
var LanguageRepository = module.exports;

LanguageRepository.findOneByCode = function (code) {
    return Language
      .query()
      .where('code', '=', code)
      .first();
};
