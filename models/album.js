'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    release_year: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  album.associate = function(models) {
    // associations can be defined here
  };
  return album;
};