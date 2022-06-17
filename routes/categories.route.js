const { Router } = require('express');
const router = Router();
const {categoryesController} = require('../contollers/categories.controller');

router.post('/categories', categoryesController.addCategory);
router.delete('/categories/:id', categoryesController.deleteCategory);

module.exports = router;