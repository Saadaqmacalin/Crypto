import React from "react";

const SortSelector = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-white text-sm font-medium">
        Sort By:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-gray-800 text-white text-sm px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-700 transition duration-150"
      >
        <option value="market_cap_desc">Market Cap (High to Low)</option>
        <option value="market_cap_asc">Market Cap (Low to High)</option>
        <option value="price_desc">Price (High to Low)</option>
        <option value="price_asc">Price (Low to High)</option>
        <option value="change_desc">24h Change (High to Low)</option>
        <option value="change_asc">24h Change (Low to High)</option>
      </select>
    </div>
  );
};

export default SortSelector;
