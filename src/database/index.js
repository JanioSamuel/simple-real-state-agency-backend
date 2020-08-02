const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const LevelUser = require('../models/LevelUser');
const Property = require('../models/Property');
const PropertyImage = require('../models/PropertyImage');
const User = require('../models/User');

const connection = new Sequelize(databaseConfig);

LevelUser.init(connection);
Property.init(connection);
PropertyImage.init(connection);
User.init(connection);

module.exports = connection;