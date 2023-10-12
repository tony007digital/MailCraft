const express = require('express');
const router = express.Router();

// @route    GET api/templates
// @desc     Get all templates
// @access   Public
router.get('/', (req, res) => {
  res.send('Template route');
});

module.exports = router;
