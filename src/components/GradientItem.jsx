import React from "react";

const GradientItem = (props) => {
  const { inputValueSecond, inputValueFirst, isSubmitted } = props;

  const itemStyle = {
    width: "300px",
    height: "100px",
    margin: "30px auto",
    backgroundImage: `linear-gradient(${props.inputValueFirst}, ${props.inputValueSecond})`,
  };

  return (
    <div style={itemStyle}>
      <button>remove</button>
    </div>
  );
};

export default GradientItem;
