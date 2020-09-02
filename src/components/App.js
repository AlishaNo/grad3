import React from "react";
import GradientItem from "./GradientItem";
import "../App.css";
import _uniqueId from "lodash/uniqueId";

const regExpHexShort = new RegExp(/^#[0-9A-F]{3}$/gi);
const regExpHexLong = new RegExp(/^#[0-9A-F]{6}$/gi);

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
    );
  };

  validateInputValues() {
    const { primaryColor, secondaryColor } = this.state;

    const isPrimaryColorValid =
      regExpHexShort.test(primaryColor) && regExpHexLong.test(primaryColor);
    const isSecondaryColorValid =
      regExpHexShort.test(secondaryColor) && regExpHexLong.test(secondaryColor);

    this.setState({ isDisabled: isPrimaryColorValid || isSecondaryColorValid });
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

  render() {
    const { colorSets } = this.state;
    return (
      <div className="App">
      <h1>"new branch" </h1>
        <form onSubmit={this.handleSubmit}>
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
          <button disabled={this.state.isDisabled} type="submit">
            Add Gradient
          </button>
        </form>
        <ul style={{ listStyle: "none" }}>
          {colorSets.map((colorSet) => (
            <GradientItem key={colorSet.id} colorSet={colorSet} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
