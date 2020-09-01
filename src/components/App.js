
import React from 'react';
import GradientItem from "./GradientItem";
import '../App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValueFirst: '',//сюда должны получать значение из инпута
            inputValueSecond: '',//сюда должны получать значение из инпута
            isSubmitted: false,
            isDisabled: false,
            itemsList: []
        };
    }

    handleChange = event => {
        //console.log('input ', event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
        // const { inputValueFirst, inputValueSecond } = this.state;

        const regExpHexShort = new RegExp(/^#[0-9A-F]{3}$/gi);
        const regExpHexLong = new RegExp(/^#[0-9A-F]{6}$/gi);
        // console.log('input ', [event.target.name],event.target.value, );
        if (!(regExpHexShort.test(event.target.value) || regExpHexLong.test(event.target.value))) {
            // if(!(regExpHexShort.test(event.target.value) || regExpHexLong.test(event.target.value))) {
            //
            // }
            console.log('not valid', event.target.value)
        } else {
            console.log(' valid', event.target.value);
            // this.setState ({
            //     isDisabled: !this.state.isDisabled
            // })
        }
    };

    // validate = () => {
    //     let inputError = '';
    // };

    // deleteItem = item => {
    //     const updateItemsList = this.state.itemsList.filter(function (item) {
    //         return item.id !== movie.id;
    //     });
    //     console.log('updateItemsList', updateItemsList);
    //     this.setState ({
    //         itemsList: updateItemsList
    //     });
    // };
    handleSubmit = (event) => {
        event.preventDefault();
        const arrayVar = this.state.itemsList;
        arrayVar.push(<GradientItem inputValueFirst = {this.state.inputValueFirst}
                                    inputValueSecond = {this.state.inputValueSecond}
                                    deleteItem = {this.deleteItem}/>);

        this.setState({
            isSubmitted: true,
            itemsList: arrayVar
            // itemsArray: [...this.state.itemsArray, {GradientItem}]
        })

        //  const isValid = this.validate();
        // if (isValid) {
        //     console.log(this.state);
        // }
    };

    render() {
        console.log('itemsArray', this.state.itemsList);
        //console.log('changed', this, this.state, this.state.inputValueFirst, this.state.inputValueSecond);
        const items = this.state.itemsList.map((item, index) => <li key={index}>{item}</li>);
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <label><input placeholder="hex1"
                                  name="inputValueFirst"
                                  value={this.state.inputValueFirst}
                                  type="text"
                                  onChange={this.handleChange}
                                  required/>
                    </label>
                    <label><input placeholder="hex2"
                                  name="inputValueSecond"
                                  value={this.state.inputValueSecond}
                                  type="text"
                                  onChange={this.handleChange}
                                  required/>
                    </label>
                    <button disabled={this.state.isDisabled} type="submit">Add Gradient</button>
                </form>
                <ul style = {{listStyle: 'none'}}>
                    {items}
                </ul>
            </div>
        )
    }
}

export default App;
