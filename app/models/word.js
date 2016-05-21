'use strict';

module.exports = function(sequelize, DataTypes) {
  
  var Word = sequelize.define('Word', {
    text: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        //Word.belongsTo(models.Language);
        console.log(Word);
      }
    }
  });
  
  return Word;
};