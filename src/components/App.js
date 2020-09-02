import React from "react";
import GradientItem from "./GradientItem";
import "../App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValueFirst: "", //сюда должны получать значение из инпута
      inputValueSecond: "", //сюда должны получать значение из инпута
      isSubmitted: false,
      isDisabled: false,
      itemsList: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    const regExpHexShort = new RegExp(/^#[0-9A-F]{3}$/gi);
    const regExpHexLong = new RegExp(/^#[0-9A-F]{6}$/gi);
    if (
      !(
        regExpHexShort.test(event.target.value) ||
        regExpHexLong.test(event.target.value)
      )
    ) {
      console.log("not valid", event.target.value);
    } else {
      console.log(" valid", event.target.value);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const arrayVar = this.state.itemsList;
    arrayVar.push(
      <GradientItem
        inputValueFirst={this.state.inputValueFirst}
        inputValueSecond={this.state.inputValueSecond}
        deleteItem={this.deleteItem}
      />
    );
    this.setState({
      isSubmitted: true,
      itemsList: arrayVar,
    });
  };

  render() {
    console.log("itemsArray", this.state.itemsList);
    const items = this.state.itemsList.map((item, index) => (
      <li key={index}>{item}</li>
    ));
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              placeholder="hex1"
              name="inputValueFirst"
              value={this.state.inputValueFirst}
              type="text"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <input
              placeholder="hex2"
              name="inputValueSecond"
              value={this.state.inputValueSecond}
              type="text"
              onChange={this.handleChange}
              required
            />
          </label>
          <button disabled={this.state.isDisabled} type="submit">
            Add Gradient reform
          </button>
        </form>
        <ul style={{ listStyle: "none" }}>{items}</ul>
      </div>
    );
  }
}

export default App;
