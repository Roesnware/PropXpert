const PlayerProp = require('../models/PlayerProp');

// Controller for getting player props from MongoDB
exports.getPlayerProps = async (req, res) => {
  try {
    const props = await PlayerProp.find();
    res.json(props);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch player props' });
  }
};