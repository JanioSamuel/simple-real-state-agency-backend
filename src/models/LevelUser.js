const { Model, DataTypes } = require('sequelize');

class LevelUser extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      level: {
        type: DataTypes.ENUM,
        values: ['ADMIN']
      }
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.User, {
      foreignKey: 'level'
    })
  }
}
module.exports = LevelUser;