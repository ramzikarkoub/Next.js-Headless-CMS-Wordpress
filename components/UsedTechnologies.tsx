import React from "react";

export default function UsedTechnologies({ technologies }) {
  console.log(technologies);
  return (
    <div className="flex items-start gap-2 mt-10 mb-12">
      <p className="font-semibold text-gray-900 text-md text-start">
        Technologies:
      </p>

      <div className="flex flex-wrap gap-1 mt-0.5">
        {technologies.split(",").map((item, index) => (
          <span
            key={index}
            className="text-white bg-blue-500 py-0.5 px-1 rounded-lg text-xs"
          >
            {item.trim()}
          </span>
        ))}
      </div>
    </div>
  );
}
