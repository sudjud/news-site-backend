const News = require('../models/News.model');
const mongoose = require('mongoose')

module.exports.newsController = {
  addNews: async (req, res) => {
    const {
      title,
      text,
      _categoryId
    } = req.body;
    try {
      await News.create({
        title,
        text,
        _categoryId: mongoose.Types.ObjectId(_categoryId)
      });
      res.json(`Добавлена новость: ${req.body}`)
    } catch (e) {
      console.log(e);
    }

  },

  deleteNews: async (req, res) => {
    try {
      res.json(`Удалена новость с заголовком "${(await News.findByIdAndDelete(req.params.id)).title}"`)
    } catch (e) {
      console.log(e);
    }
  },

  updateNews: async (req, res) => {
    try {
      await News.findByIdAndUpdate(req.params.id, {
        ...req.body
      });
      res.json(`Изменена запись ${req.body}`)
    } catch (e) {
      console.log(e);
    }

  },

  showNewsItem: async (req, res) => {
    try {
      res.json(await News.findById(req.params.id))
    } catch (e) {
      console.log(e);
    }
  },

  showNews: async (req, res) => {
    try {
      res.json(await News.find({}).populate("_categoryId"))
    } catch (e) {
      console.log(e);
    }
  },

  showNewsItemByCategory: async (req, res) => {
    try {
      res.json(await News.find({
        _categoryId: req.body._categoryId
      }))
    } catch (e) {
      console.log(e);
    }
  },
}