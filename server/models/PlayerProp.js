const mongoose = require('mongoose');

// Player Prop Schema
const playerPropSchema = new mongoose.Schema({
  player: String,
  stat: String,  // e.g. "Points", "Rebounds"
  line: Number,  // e.g. 26.5
  overOdds: Number,
  underOdds: Number,
  gameTime: Date,
  homeTeam: String,
  awayTeam: String,
  marketId: String,
});

// Create the model
const PlayerProp = mongoose.model('PlayerProp', playerPropSchema);

module.exports = PlayerProp;