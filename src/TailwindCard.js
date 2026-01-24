import React from "react";

function TailwindCard() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Tailwind Card</h2>
        <p className="text-gray-600">
          This is a beautiful card with rounded corners and a shadow.
        </p>
      </div>
    </div>
  );
}

export default TailwindCard;
