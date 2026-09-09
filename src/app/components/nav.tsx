"use client";

import React, { useState } from "react";

const navItems = ["About", "Disciplines", "Events", "Excos", "Community"];


export default function Navbar() {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <nav className="flex space-x-4">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => setActiveTab(item.toLowerCase())}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeTab === item.toLowerCase()
              ? "bg-green-600 text-white"
              : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}