const express = require('express')
const { getTypes } = require('../../models/words')

const router = express.Router()

router.get('/types', (req, res) => {
  console.log('GET types')
  res.json(getTypes())
})

module.exports = router
