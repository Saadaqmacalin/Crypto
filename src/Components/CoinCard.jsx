import React from "react";
import { Link } from "react-router";

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`} >
    <div
      className="bg-gray-900 text-white shadow-lg rounded-lg p-4 flex items-center space-x-4
       transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      <img
        src={coin.image}
        alt={coin.name}
        className="w-10 h-10 object-contain"
      />
      <div>
        <p className="font-semibold text-base md:text-lg">{coin.name}</p>
        <p className="text-sm text-gray-300">{coin.symbol.toUpperCase()}</p>
        <p className="text-sm text-gray-300">
          Price: ${coin.current_price.toLocaleString()}
        </p>
        <p
          className={`text-sm font-medium ${
            coin.price_change_percentage_24h >= 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </p>
        <p>Market cap:{coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
    </Link>
  );
};

export default CoinCard;
