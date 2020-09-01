import React from "react";

const GradientItem = props => {

    const { inputValueSecond, inputValueFirst, isSubmitted } = props;

    const itemStyle = {
        width: "300px",
        height: "100px",
        margin: "30px auto",
        backgroundImage: `linear-gradient(${props.inputValueFirst}, ${props.inputValueSecond})`
    };

    console.log('props ', props, itemStyle);

    return (
        <div style={itemStyle}>
            <p>lolo</p>
            <button>remove</button>
        </div>
    )};

export default GradientItem;
