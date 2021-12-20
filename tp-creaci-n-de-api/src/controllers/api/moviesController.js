const db = require('../../database/models');

const getAll = async (req, res) => {
  try {
    const movies = await db.Movie.findAll();
    console.log(movies)
    res.json({
      status: 200,
      total: movies.length,
      url: req.url,
      data: movies
    });
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  const { title, rating, awards, release_date, length, genre_id } = req.body;
  try {
    const movie = await db.Movie.create({
      title,
      rating,
      awards,
      release_date,
      length: length || null,
      genre_id: genre_id || null
    });

    res.json({
      movie
    });
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const movie = db.Movie.update(
      {
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length,
        genre_id: req.body.genre_id
      },
      {
        where: { id: +req.params.id }
      }
    );

    return res.json(movie);
  } catch (error) {
    res.send(error);
  }
};

const remove = async (req, res) => {
  try {
    const movie = await db.Movie.findByPk(req.params.id);
    console.log(movie)

    if (!movie) throw new Error('La película no existe');

    await db.Movie.destroy({ where: { id: req.params.id } });

    res.json({
      movie
    });
  } catch (error) {
    console.log(error);
  }
};

const findById = async (req, res) => {
  try {
    const movie = await db.Movie.findByPk(req.params.id);
    if (!movie) {
      throw new Error('La película no existe');
    }

    res.json({
      status: 200,
      data: movie
    });
  } catch (error) {
    res.json({
      id_Movie: req.params.id,
      error
    });
  }
};

module.exports = {
  getAll,
  findById,
  remove,
  update,
  create
};
