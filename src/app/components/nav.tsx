"use client";

import React, { useState } from "react";

const navItems = ["About", "Disciplines", "Events", "Excos", "Community"];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(navItems[0].toLowerCase());

  return (
    <nav className="flex items-center w-full">
      <div className="flex space-x-4">
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
      </div>

      {/* Right side CTA Button */}
      <div className="ml-auto">
        <a
          href="#community"
          className="rounded-full bg-[#274193] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-[#1b2d63]"
        >
          Join Community
        </a>
      </div>
    </nav>
  );
}
