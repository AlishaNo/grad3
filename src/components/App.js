import React from "react";
import GradientItem from "./GradientItem";
import "../App.css";
import _uniqueId from "lodash/uniqueId";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      primaryColor: "",
      secondaryColor: "",
      colorSets: [],
      isDisabled: false,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value,
      },
      this.validateInputValues
    )
  };

  validateInputValues() {
    const { primaryColor, secondaryColor } = this.state;
  
    const isPrimaryColorValid = primaryColor.length < 5 ? /^#[0-9A-F]{3}$/gi.test(primaryColor) : /^#[0-9A-F]{6}$/gi.test(primaryColor);
    const isSecondaryColorValid = secondaryColor.length < 5 ? /^#[0-9A-F]{3}$/gi.test(secondaryColor) : /^#[0-9A-F]{6}$/gi.test(secondaryColor);
    
    this.setState({
      isDisabled: !(isPrimaryColorValid && isSecondaryColorValid)
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { primaryColor, secondaryColor } = this.state;
    const colorSet = {
      id: _uniqueId(),
      primary: primaryColor,
      secondary: secondaryColor,
    };

    this.setState((prevState) => ({
      colorSets: [...prevState.colorSets, colorSet],
      primaryColor: "",
      secondaryColor: "",
    }));
  };
  removeItem = colorSet => {
  const updateColors = this.state.colorSets.filter(function (item) {
  return item.id !== colorSet.id;
  });
    this.setState({
      colorSets: updateColors
    })
};

  render() {
    const { colorSets } = this.state;
    return (
      <div className="App">
        <form  className='gradientForm' onSubmit={this.handleSubmit}>
          <div className='inputBlock'>
          <label>
            <input
              placeholder="hex1"
              name="primaryColor"
              value={this.state.primaryColor}
              type="text"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <input
              placeholder="hex2"
              name="secondaryColor"
              value={this.state.secondaryColor}
              type="text"
              onChange={this.handleChange}
              required
            />
          </label>
          </div>
          <button disabled={this.state.isDisabled} type="submit">
            Add Gradient!
          </button>
        </form>
        <ul style={{ listStyle: "none" }}>
          {colorSets.map((colorSet) => (
            <GradientItem key={colorSet.id}
                          colorSet={colorSet}
                          removeItem={this.removeItem}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
