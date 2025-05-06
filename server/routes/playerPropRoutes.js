const express = require('express');
const router = express.Router();
const { getPlayerProps } = require('../controllers/playerPropController');

// Route for fetching player props
router.get('/player-props', getPlayerProps);

module.exports = router;