const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: String,
  text: String,
  _categoryId: { type: Schema.Types.ObjectId, ref: 'Category' }
});

const News = mongoose.model('News', newsSchema);

module.exports = News;