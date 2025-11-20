import React from "react";

const FilterInput = ({ filter, onFilterChange }) => {
  return (
    <div className="mb-4 px-4 flex justify-end">
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Search coins..."
        className="bg-gray-800 text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
      />
    </div>
  );
};

export default FilterInput;
