const express = require('express')
const router = express.Router();
const blogController = require('../controllers/blogController.js')


router.get('/create', blogController.getCreateView);
router.post('/', blogController.create);
router.get('/:id', blogController.details)
router.delete('/:id', blogController.deleteBlog)
router.get('/', blogController.index)

module.exports = router;