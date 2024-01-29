const devSkills = [
  { id: 125223, devSkills: 'Javascript', done: true },
  { id: 127904, devSkills: 'Learn Express', done: false },
  { id: 139608, devSkills: 'Master CSS', done: false }
]

getOne = (id) => {
  return devSkills.find(devSkills => devSkills.id === parseInt(id));
}



const getAll = () => {
  return devSkills
}

module.exports = {
  getAll,getOne
}
