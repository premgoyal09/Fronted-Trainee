// src/components/Widget.jsx
import React from "react";

const Widget = ({ title, description, onRemove }) => {
  return (
    <div className="rounded-xl shadow-md p-4 bg-white border w-full md:w-1/3">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="mb-4 text-gray-700">{description}</p>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default Widget;