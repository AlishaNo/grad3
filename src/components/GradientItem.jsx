import React from "react";

const GradientItem = (props) => {
  const { colorSet, removeItem } = props;
  
  const itemStyle = {
    height: "100px",
    margin: "30px auto",
    backgroundImage: `linear-gradient(${colorSet.primary}, ${colorSet.secondary})`,
  };
  
  return (
      <div className='gradientBlock' style={itemStyle}>
        <button onClick={removeItem.bind(null, props.colorSet)}>x</button>
      </div>
  );
};

export default GradientItem;
