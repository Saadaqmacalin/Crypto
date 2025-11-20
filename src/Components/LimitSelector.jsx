import React from "react";

const LimitSelector = ({ limit, onLimitChange }) => {
  return (
    <div className="flex justify-end mb-4 pr-4">
      <label htmlFor="limit" className="text-white font-bold text-2xl mr-2">
        Show:
      </label>
      <select
        id="limit"
        value={limit}
        onChange={(e) => onLimitChange(Number(e.target.value))}
        className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 focus:outline-none"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default LimitSelector;
