const express = require('express');
const router = express.Router();
const genresApi = require('../controllers/api/genresController');

router.get('/genres', genresApi.getAll);
router.get('/genres/detail/:id', genresApi.getOne);

module.exports = router;
