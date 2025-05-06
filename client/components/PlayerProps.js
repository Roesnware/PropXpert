import React, { useState, useEffect } from 'react';
import useSWR from 'swr'; // SWR for data fetching
import { API_URL, API_ENDPOINTS, PROPS_TYPES, UI_TEXT } from '../lib/constants';
import PropTypes from 'prop-types';

const fetcher = (url) => fetch(url).then((res) => res.json());

const PlayerProps = ({ playerId, gameId }) => {
  const { data, error } = useSWR(
    `${API_URL}${API_ENDPOINTS.GET_PLAYER_PROPS}?playerId=${playerId}&gameId=${gameId}`,
    fetcher
  );

  const [selectedPropType, setSelectedPropType] = useState(PROPS_TYPES.POINTS);

  useEffect(() => {
    // Optionally handle side effects when the prop type changes
  }, [selectedPropType]);

  if (error) return <div className="text-red-500">{UI_TEXT.ERROR}</div>;
  if (!data) return <div>{UI_TEXT.LOADING}</div>;

  const handlePropTypeChange = (type) => {
    setSelectedPropType(type);
  };

  const filteredProps = data.filter((prop) => prop.type === selectedPropType);

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-4">
      <h2 className="text-xl font-semibold">Player Prop Bets for {playerId}</h2>

      <div className="flex space-x-4">
        {Object.keys(PROPS_TYPES).map((key) => (
          <button
            key={key}
            onClick={() => handlePropTypeChange(PROPS_TYPES[key])}
            className={`py-2 px-4 rounded-full ${
              selectedPropType === PROPS_TYPES[key]
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-black'
            }`}
          >
            {PROPS_TYPES[key]}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredProps.length > 0 ? (
          filteredProps.map((prop) => (
            <div key={prop.id} className="border p-4 rounded-lg">
              <h3 className="text-lg font-medium">{prop.name}</h3>
              <p>{prop.description}</p>
              <div className="mt-4 flex justify-between">
                <span>Line: {prop.line}</span>
                <span>Odds: {prop.odds}</span>
              </div>
            </div>
          ))
        ) : (
          <div>{UI_TEXT.NO_DATA}</div>
        )}
      </div>
    </div>
  );
};

PlayerProps.propTypes = {
  playerId: PropTypes.string.isRequired,
  gameId: PropTypes.string.isRequired,
};

export default PlayerProps;