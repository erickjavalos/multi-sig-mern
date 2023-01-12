const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NFT extends Model {}

NFT.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'nft'
  }
);

module.exports = NFT;