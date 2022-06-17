const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  commentatorName: String,
  text: String,
  _newsId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'News'
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;