const express = require('express')
const router = express.Router()
const entriesController = require('../controllers/entries')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, entriesController.getEntries)

router.get('/:id', entriesController.getSingle)

router.post('/createEntry', entriesController.createEntry)

router.put('/editEntry', entriesController.editEntry)

router.delete('/deleteEntry', entriesController.deleteEntry)

module.exports = router