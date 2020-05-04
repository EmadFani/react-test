import React from 'react';
import './App.css';
import {Welcome} from "./components/welcome";

class App extends React.Component{
    state = {
        lastClickTime: new Date(),
        welcomeStyle: {
            color: 'yellow'
        },
        headerStyle: {
            backgroundColor: 'black'
        },
        listOfAllowedColors: ['white', 'black', 'yellow', 'pink', 'indianred']
    };
    headerClicked() {
        // your code here
        // listen for click event of page and change background color according to listOfAllowedColors
        // * find index of active color
        // * check if the index is last index of listOfAllowedColors
        // * if it's the last index start from the beginning of listOfAllowedColors
        // * else change to next color
    }
    changeColorTimeStamps() {
        // your code here
        // wait for click event if not triggered you should change to the next color if 2 seconds exceeded
    }
    componentDidMount() {
        // your code here
    }

    render () {
        return (
            <div className="App">
                <header onClick={this.headerClicked} style={this.state.headerStyle} className="App-header">
                    <Welcome style={this.state.welcomeStyle} colorName={'salam'}/>
                </header>
            </div>
        )
    };
}

export default App;
