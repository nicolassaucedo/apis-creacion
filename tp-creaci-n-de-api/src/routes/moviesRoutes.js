const express = require('express');
const router = express.Router();
const moviesApi = require('../controllers/api/moviesController');

router.get('/', moviesApi.getAll);
router.get('/:id', moviesApi.findById);
router.post('/', moviesApi.create);
router.put('/:id', moviesApi.update);
router.delete('/:id/delete', moviesApi.remove);

module.exports = router;
