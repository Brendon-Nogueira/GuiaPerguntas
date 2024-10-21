const express = require('express')
const router = express.Router()
const controller = require('../controller/question.controller')

router.get('/', controller.getAll)

router.get('/ask', (req, res) => {
    res.render('ask')
});

router.post('/saveAsk', controller.create)
router.put('/submit-answer/:id', controller.updateAnswerById)
router.get('/searchAnswer', controller.getAll)
router.get('/searchAnswer/:id', controller.getAnswerById)


module.exports = router
