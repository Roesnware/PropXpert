import Head from 'next/head';
import useSWR from 'swr';
import PlayerCard from '@/components/PlayerCard'; // Ensure you have this component
import Loading from '@/components/Loading'; // You may want a loading spinner component

// Fetch function using SWR (for data fetching)
const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {
  // Use SWR to fetch the player props data for the day
  const { data, error, isLoading } = useSWR('/api/props/today', fetcher);

  return (
    <>
      <Head>
        <title>PropXpert - AI-Powered Player Props</title>
      </Head>

      <main className="p-4 bg-gray-900 text-white min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Today’s Top Player Props</h1>

        {/* Display loading state */}
        {isLoading && <Loading />}
        {/* Display error state if something goes wrong */}
        {error && <p className="text-red-400">Failed to load props. Please try again later.</p>}

        {/* Display player prop cards if data is available */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.props?.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </main>
    </>
  );
}