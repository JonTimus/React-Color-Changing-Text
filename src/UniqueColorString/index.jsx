import React, { useEffect, useState } from "react";

const UniqueColorString = ({ text }) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    // Generate random colors for each letter
    const generateColors = () => {
      const colorArray = [];
      for (let i = 0; i < text.length; i++) {
        const randomColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`;
        colorArray.push(randomColor);
      }
      return colorArray;
    };

    // Update colors every second
    const intervalId = setInterval(() => {
      setColors(generateColors());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return (
    <span>
      {text.split("").map((letter, index) => (
        <span key={index} style={{ color: colors[index] }}>
          {letter}
        </span>
      ))}
    </span>
  );
};

export default UniqueColorString;
