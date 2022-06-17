const { Router } = require('express');
const router = Router();
const {commentController} = require('../contollers/comments.controller');

router.post('/comments', commentController.addComment);
router.delete('/comments/:id', commentController.deleteComment);
router.get('/comments/:id', commentController.showCommentsById);

module.exports = router;