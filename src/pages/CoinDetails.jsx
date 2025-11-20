import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router'; 
import Spinner from '../Components/Spinner';
import CoinChart from '../Components/CoinChart'
const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setCoin(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [id]);

  return (
    <div className='text-black border border-gray-200 rounded-2xl max-w-96 bg-gray-100 mx-auto mt-3.5 p-4'>
      <Link to='/' className='hover:underline block mb-2'>← Back to Home</Link>

      {loading && <Spinner/>}
      {error && <p className='text-red-600'>Error: {error}</p>}

      {!loading && !error && coin && (
        <>
          <h1 className='text-2xl font-bold'>
            {coin.name} ({coin.symbol?.toUpperCase()})
          </h1>

          <img
            src={coin.image?.large}
            alt={coin.name}
            className='mt-6 w-32 h-32 mx-auto'
          />

          <p className='mt-4 text-gray-700'>
            {coin.description?.en?.split('.')[0] + '.'}
          </p>

          <div className='mt-4 space-y-1'>
            <h3>Rank: {coin.market_cap_rank}</h3>
            <h3>
              Current Price: ${coin.market_data?.current_price?.usd?.toLocaleString()}
            </h3>
            <h4>
              Market Cap: ${coin.market_data?.market_cap?.usd?.toLocaleString()}
            </h4>
            <h4>
              High 24h: ${coin.market_data?.high_24h?.usd?.toLocaleString()}
            </h4>
            <h4>
              Low 24h: ${coin.market_data?.low_24h?.usd?.toLocaleString()}
            </h4>
            <h4>
              24h Price Change: ${coin.market_data?.price_change_24h?.toFixed(2)}
            </h4>
            <h4>
              Circulating Supply: {coin.market_data?.circulating_supply?.toLocaleString() || 'N/A'}
            </h4>
            <h4>
              Total Supply: {coin.market_data?.total_supply?.toLocaleString() || 'N/A'}
            </h4>
            <h4>
              All-Time High: ${coin.market_data?.ath?.usd?.toLocaleString()} on{' '}
              {new Date(coin.market_data?.ath_date?.usd).toLocaleDateString()}
            </h4>
            <h4>
              All-Time Low: ${coin.market_data?.atl?.usd?.toLocaleString()} on{' '}
              {new Date(coin.market_data?.atl_date?.usd).toLocaleDateString()}
            </h4>
            <h4>
              Last Updated: {new Date(coin.last_updated).toLocaleDateString()}
            </h4>
          </div>

          <CoinChart coinId={coin.id}/>

          <div className='mt-4 space-y-1'>
            {coin.links?.homepage?.[0] && (
              <p>
                <a href={coin.links.homepage[0]} target='_blank' rel='noopener noreferrer'>
                  Website
                </a>
              </p>
            )}
            {coin.links?.blockchain_site?.[0] && (
              <p>
                <a href={coin.links.blockchain_site[0]} target='_blank' rel='noopener noreferrer'>
                  Blockchain Explorer
                </a>
              </p>
            )}
               {coin.categories.length > 0 &&  ( 
             <p>Categories: {coin.categories.join(',')}</p>
            )  }
          </div>
        </>
      )}

      {!loading && !error && !coin && <p>Not Found Data</p>}
    </div>
  );
};

export default CoinDetails;
