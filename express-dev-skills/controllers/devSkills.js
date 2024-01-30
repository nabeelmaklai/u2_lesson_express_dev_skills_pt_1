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

const newSkill = (req, res) => {
  res.render('devSkills/new', { title: 'New Skill' })
}

const create = (req, res) => {
  console.log(req.body)
  Dev.create(req.body)
  res.redirect('/devSkills')
}

const deleteSkill = (req, res) => {
  Dev.deleteOne(req.params.id)
  res.redirect('/devSkills')
}

const editSkill = (req, res) => {
  const devSkills = Dev.getOne(req.params.id)
  res.render('devSkills/edit', {
    devSkills
  })
}
const update = (req, res) => {
  skillId = req.params.id
  updatedSkill = req.body.devSkills
  Dev.updateOne(skillId, updatedSkill)
  res.redirect('/devSkills')
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit: editSkill,
  update
}
