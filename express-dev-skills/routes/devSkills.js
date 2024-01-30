// var express = require('express')
// var router = express.Router()

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource')
// })

// module.exports = router;

var express = require('express')
var router = express.Router()

// Require the controller that exports To-Do CRUD functions
var devSkillsCtrl = require('../controllers/devSkills')

router.get('/', devSkillsCtrl.index)
router.get('/new', devSkillsCtrl.new)
router.get('/:id', devSkillsCtrl.show)
router.post('/', devSkillsCtrl.create)
router.get('/:id/edit', devSkillsCtrl.edit)
router.delete('/:id', devSkillsCtrl.delete)
router.put('/:id', devSkillsCtrl.update)

module.exports = router
