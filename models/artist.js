'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    artist_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.fn('NOW')
    }
  }, {
    sequelize,
    modelName: 'artist',
    tableName: 'artist',
    freezeTableName: true,
    timestamps: false
  });
  artist.associate = function(models) {
    // associations can be defined here
  };
  return artist;
};