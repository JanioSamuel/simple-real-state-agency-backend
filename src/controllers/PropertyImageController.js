const PropertyImage = require('../models/PropertyImage');

module.exports = {
  async store(files, propertyId) {
    files.map(async file => {
      const response = await PropertyImage.create({
        url: file.path,
        property_id: propertyId,
        original_name: file.originalname
      });
    }) 
  },

  async index(req, res) {
    const { property_id } = req.headers;
    const response = await PropertyImage.findAll({ where: { property_id: property_id } });
    return res.json(response);
  },
}