import React from "react";

export function Categories() {
  const categories = [
    { name: "Personal", color: "bg-yellow-500" },
    { name: "Academic", color: "bg-cyan-500" },
    { name: "Others", color: "bg-blue-500" },
    { name: "Work", color: "bg-purple-500" },
  ];

  return (
    <div className="task-categories">
      <h2 className="text-lg font-semibold mb-2">Task Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span
              className={`h-4 w-4 rounded-full ${category.color}`}
              aria-hidden="true"
            ></span>
            <span className="text-gray-700">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
