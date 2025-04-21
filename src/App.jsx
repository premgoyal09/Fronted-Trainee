// src/App.jsx
import React, { useState } from "react";
import Widget from "./Component/Widget";
import { useWidgetStore } from "./Store/widgetStore";
import { v4 as uuidv4 } from "uuid";

function App() {
  const { widgets, addWidget, removeWidget } = useWidgetStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title && description) {
      addWidget({ id: uuidv4(), title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-purple-800 mb-2">
            6 Month SMM Report – Bakery Project
          </h1>
          <p className="text-lg text-gray-700 font-medium">
            Created by: [Your Name] – Frontend Trainee
          </p>
        </header>

        <div className="bg-white p-6 rounded-2xl shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Widget</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 p-3 rounded-xl border"
            />
            <input
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="flex-1 p-3 rounded-xl border"
            />
            <button
              onClick={handleAdd}
              className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
            >
              Add Widget
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {widgets.length > 0 ? (
            widgets.map((widget) => (
              <Widget
                key={widget.id}
                title={widget.title}
                description={widget.description}
                onRemove={() => removeWidget(widget.id)}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">No widgets yet. Add some!</p>
          )}
        </div>

        <footer className="mt-10 text-center text-gray-600">
          Made with 💖 for Bakery SMM Report
        </footer>
      </div>
    </div>
  );
}

export default App;