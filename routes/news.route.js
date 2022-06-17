const { Router } = require('express');
const router = Router();
const {newsController} = require('../contollers/news.controller');

router.get('/news', newsController.showNews);
router.get('/news', newsController.showNewsItemByCategory);
router.get('/news/:id', newsController.showNewsItem);
router.post('/news', newsController.addNews);
router.patch('/news/:id', newsController.updateNews);
router.delete('/news/:id', newsController.deleteNews);

module.exports = router;