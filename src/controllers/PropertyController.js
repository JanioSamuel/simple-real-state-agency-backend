const Property = require('../models/Property');
const PropertyImage = require('../models/PropertyImage');
const PropertyImageController = require('./PropertyImageController');

module.exports = {
  async store(req, res) {
    const { title, description, price, type, tags, neighborhood, city } = req.body;

    const files = req.files;

    const response = await Property.create({
      title,
      description,
      price,
      type,
      tags,
      neighborhood,
      city
    });
    await PropertyImageController.store(files, response.id);
    res.json(response);
  },

  async index(req, res) {
    const { id } = req.query;
    let response = null;
    if (id !== undefined) {
      response = await Property.findOne({
        where: { id: id },
        include: [{
          model: PropertyImage,
        }]
      });
    } else {
      response = await Property.findAll({
        include: [{
          model: PropertyImage,
        }]
      });
    }

    return res.json(response);
  },

  async update(req, res) {
    const { title, description, price, type, tags, neighborhood, city } = req.body;
    const { id } = req.params;

    const response = await Property.update({
      title,
      description,
      price,
      type,
      tags,
      neighborhood,
      city
    }, { where: { id: id } });

    return res.json(response);
  }
}