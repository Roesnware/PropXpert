const axios = require('axios');
const PlayerProp = require('../models/PlayerProp');

const fetchAndStorePlayerProps = async () => {
  const apiKey = 'your_api_key_here'; // Add your API key here
  const url = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds';

  try {
    const response = await axios.get(url, {
      params: {
        regions: 'us',
        markets: 'player_points,player_rebounds,player_assists',
        apiKey: apiKey,
      }
    });

    // Store props in MongoDB
    for (let game of response.data) {
      for (let prop of game.outcomes) {
        const newProp = new PlayerProp({
          player: game.player,
          stat: game.stat,
          line: parseFloat(prop.name.split(' ')[1]),
          overOdds: prop.price < 0 ? Math.abs(prop.price) : 0,
          underOdds: prop.price > 0 ? prop.price : 0,
          gameTime: new Date(game.commence_time),
          homeTeam: game.home_team,
          awayTeam: game.away_team,
          marketId: game.market_id,
        });
        await newProp.save();
      }
    }

    console.log('Player props fetched and saved successfully!');
  } catch (error) {
    console.error('Error fetching or saving player props:', error);
  }
};

module.exports = fetchAndStorePlayerProps;