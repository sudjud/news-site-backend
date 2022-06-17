const Comment = require('../models/Comment.model');

module.exports.commentController = {
  addComment: async (req, res) => {
    const {
      commentatorName,
      text,
      _newsId
    } = req.body;
    try {
      await Comment.create({
        commentatorName,
        text,
        _newsId
      })
      res.json(`${commentatorName} добавил комментарий.`)
    } catch (e) {
      console.log(e);
    }
  },
  deleteComment: async (req, res) => {
    const id = req.params.id;
    try {
      res.json(`Удален комментарий пользователя ${(await Comment.findByIdAndDelete(id)).commentatorName}`)
    } catch (e) {
      res.json(e);
    }
  },
  showCommentsById: async (req, res) => {
    try {
      res.json(await Comment.find({
        _newsId: req.params.id
      }).populate('_newsId'));
    } catch (e) {
      res.json(e);
    }
  }
}