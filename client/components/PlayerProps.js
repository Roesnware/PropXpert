import useSWR from 'swr';

const PlayerProps = () => {
  const { data, error } = useSWR('/api/player-props', (url) => fetch(url).then((res) => res.json()));

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl mt-4">Player Props for Today</h2>
      <ul className="mt-4">
        {data.map((prop) => (
          <li key={prop._id} className="border-b py-2">
            <strong>{prop.player}</strong> - {prop.stat}: {prop.line}
            <br />
            Over Odds: {prop.overOdds} | Under Odds: {prop.underOdds}
            <br />
            Game: {prop.homeTeam} vs. {prop.awayTeam}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerProps;