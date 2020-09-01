import React from "react";

const GradientItem = (props) => {
  const { colorSet } = props;

  const itemStyle = {
    width: "300px",
    height: "100px",
    margin: "30px auto",
    backgroundImage: `linear-gradient(${colorSet.primary}, ${colorSet.secondary})`,
  };

  return (
    <div style={itemStyle}>
      <button>remove</button>
    </div>
  );
};

export default GradientItem;
