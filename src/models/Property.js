const { Model, DataTypes } = require('sequelize');

class Property extends Model {
  static init(sequelize) {
    super.init({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.DOUBLE
      },
      type: {
        type: DataTypes.ENUM,
        values: ['RENT', 'BUY']
      },
      tags: {
        type: DataTypes.STRING
      },
      neighborhood: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      }
    }, { 
      sequelize
    })
  }
  static associate(models) {
    this.hasMany(models.PropertyImage, {
      foreignKey: 'property_id'
    });
  }
}

module.exports = Property;