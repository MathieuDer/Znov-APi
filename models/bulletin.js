'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bulletin = sequelize.define('Bulletin', {
    note: DataTypes.FLOAT
  }, {});
  Bulletin.associate = function(models) {
    // associations can be defined here
    
  };

  return Bulletin;
};