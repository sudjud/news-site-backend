const Category = require('../models/Category.model');
const mongoose = require('mongoose');

module.exports.categoryesController = {
  addCategory: async (req, res) => {
    const { name } = req.body
    try {
      await Category.create({ name });
      res.json(`Добавлена категория ${ name }`);
    } catch (e) {
      console.log(e);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      res.json(`Удален каталог ${(await Category.findByIdAndDelete(req.params.id)).name}`)
    } catch (e) {
      console.log(e);
    }
  },
  showCategories: async (req, res) => {
    try{
      res.json(await Category.find())
    } catch (e) {
      console.log(e);
    }
  }
}