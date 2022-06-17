const { Router } = require('express');

const router = Router();

router.use(require('./categories.route'))
router.use(require('./news.route'))
router.use(require('./comments.route'))

module.exports = router;