const devSkills = [
  { id: 125223, devSkills: 'Javascript', done: true },
  { id: 127904, devSkills: 'Learn Express', done: false },
  { id: 139608, devSkills: 'Master CSS', done: false }
]

getOne = (id) => {
  return devSkills.find((devSkills) => devSkills.id === parseInt(id))
}

const getAll = () => {
  return devSkills
}

const create = (skill) => {
  skill.id = Date.now() % 1000000
  skill.done = false
  devSkills.push(skill)
  console.log(devSkills)
}
const deleteOne = (id) => {
  const idx = devSkills.findIndex((devSkills) => devSkills.id === parseInt(id))
  devSkills.splice(idx, 1)
}

const updateOne = (id, updatedskill) => {
  const skillToUpdate = devSkills.find(
    (devSkills) => devSkills.id === parseInt(id)
  )
  skillToUpdate.devSkills = updatedskill
}
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne
}
