const express = require('express')
const router = express.Router()
const followController = require('../../../controllers/follow-controller')

router.delete('/:followingId', followController.removeFollow)
router.post('/', followController.addFollow)




module.exports = router