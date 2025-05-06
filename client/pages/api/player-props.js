import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req = NextApiRequest, res = NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { playerId, gameId } = req.query; // Get playerId and gameId from query parameters

      // Example of fetching data from the external API
      const response = await axios.get(
        `https://api.sportsdata.io/v3/nba/scores/json/PlayerProps/${gameId}/${playerId}`,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': process.env.SPORTS_API_KEY, // API key for authentication
          },
        }
      );

      // Send the response to the client
      return res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching player props:', error.message);
      return res.status(500).json({ message: 'Failed to fetch player props' });
    }
  } else {
    // Handle other HTTP methods (if needed)
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;