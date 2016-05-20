'use strict';
module.exports = function(sequelize, DataTypes) {
  
  var Language = sequelize.define('language', {
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  
  return Language;
};