const db = require('../../database/models');

const getAll = async (req, res) => {
  try {
    const genres = await db.Genre.findAll();
    res.json({
      status: 200,
      total: genres.length,
      url: req.url,
      data: genres
    });
  } catch (error) {
    res.json({ error: error });
  }
};
const getOne = async (req, res) => {
  try {
    const genre = await db.Genre.findByPk(req.params.id);

    res.json({
      status: 200,
      url: req.url,
      data: genre
    });
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  getAll,
  getOne
};
