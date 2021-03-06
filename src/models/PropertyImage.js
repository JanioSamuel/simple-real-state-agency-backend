const { Model, DataTypes } = require('sequelize');

class PropertyImage extends Model {
  static init(sequelize) {
    super.init({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER
      },
      url: {
        type: DataTypes.STRING
      },
      property_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'properties',
            schema: 'public'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      original_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      thumbnail_url: {
        type: DataTypes.VIRTUAL,
        get() {
          return `http://localhost:3333/files/${this.original_name}`;
        }
      }
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.Property, {
      foreignKey: 'property_id'
    });
  }
}

module.exports = PropertyImage;