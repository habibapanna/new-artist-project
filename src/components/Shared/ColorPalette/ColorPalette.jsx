import { useState } from "react";

const ColorPalette = ({ setThemeColor }) => {
  const [isOpen, setIsOpen] = useState(true);

  const colors = [
    "amber-500", "blue-500", "green-500", "red-500", 
    "purple-500", "violet-500", "black"
  ];

  const handleColorChange = (color) => {
    setThemeColor(color);

    document.querySelectorAll("[data-color='theme']").forEach((element) => {
      // Remove old color classes
      element.classList.remove(...colors.map((c) => `text-${c}`));
      // Add new color class dynamically
      element.classList.add(`text-${color}`);
    });
  };

  return (
    <div
      className={`fixed top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 p-4 shadow-lg rounded-l-xl ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-[-32px] bg-gray-400 text-white p-2 rounded-full"
      >
        {isOpen ? "❌" : "🎨"}
      </button>
      <h3 className="font-bold mb-2">Choose Color</h3>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-8 h-8 bg-${color} rounded-full border-2 border-gray-300`}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
