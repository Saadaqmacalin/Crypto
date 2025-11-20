import React from 'react'

import CoinCard from "../Components/CoinCard";
import LimitSelector from "../Components/LimitSelector";
import FilterInput from "../Components/FilterInput";
import SortSelector from "../Components/SortSelector";
import Spinner from '../Components/Spinner';

const Home = ({
    coins, filter, setFilter , limit , setLimit , sortBy ,setSortBy , loading ,error
}) => {
    const filteredCoins = coins
    .filter((coin) =>
      coin.name.toLowerCase().includes(filter.toLowerCase())
    )
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case "market_cap_desc":
          return (b.market_cap || 0) - (a.market_cap || 0);
        case "market_cap_asc":
          return (a.market_cap || 0) - (b.market_cap || 0);
        case "price_desc":
          return (b.current_price || 0) - (a.current_price || 0);
        case "price_asc":
          return (a.current_price || 0) - (b.current_price || 0);
        case "change_desc":
          return (
            (b.price_change_percentage_24h || 0) -
            (a.price_change_percentage_24h || 0)
          );
        case "change_asc":
          return (
            (a.price_change_percentage_24h || 0) -
            (b.price_change_percentage_24h || 0)
          );
        default:
          return 0;
      }
    });
  return (

     <div className="min-h-screen bg-gray-700 px-4 py-6">
      <h1 className="text-2xl md:text-4xl text-white font-bold ml-10 mb-6">
        Crypto Dash
      </h1>

      {loading && <Spinner color='white'/>}
      {error && <div className="text-center text-red-600 text-lg">{error}</div>}

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-end items-center gap-4 px-4 mb-6">
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <LimitSelector limit={limit} onLimitChange={setLimit} />
        <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      {!loading && !error && (
        <main className="grid grid-cols-1 w-fit ml-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))
          ) : (
            <p className="text-white text-3xl">No matching coins</p>
          )}
        </main>
      )}
    </div>
    
    
  )
}

export default Home