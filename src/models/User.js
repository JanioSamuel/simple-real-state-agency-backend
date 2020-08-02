const { Model, DataTypes } = require('sequelize');

  class User extends Model {
    static init(sequelize) {
      super.init({
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          type: DataTypes.INTEGER
        },
        login: {
          type: DataTypes.STRING
        },
        password: {
          type: DataTypes.STRING
        },
        level: {
          type: DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'level_users',
              schema: 'public',
            }, 
            key: 'id'
          },
          allowNull: false
        }
      }, {
        sequelize
      });
    }

    static associate(models) {
      this.belongsTo(models.LevelUser);
    }
  };
  
  module.exports = User;