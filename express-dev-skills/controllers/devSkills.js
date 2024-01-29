// controllers/todos.js
const Dev = require('../models/devSkills')
const index = (req, res) => {
  const devSkills = Dev.getAll()
  res.render('devSkills/index', {
    devSkills
  })
}
const show = (req, res) => {
  const Devs = Dev.getOne(req.params.id)
  res.render('devSkills/show', {
    Devs
  })
}

module.exports = {
  index,
  show
}
