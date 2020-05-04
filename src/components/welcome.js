import React from "react";
// refactor export class and use function export => change class component and redo it using functional component
export class Welcome extends React.Component {
    render() {
        const {style, colorName} = this.props;
        return <h1 style={style}>Hello, {colorName}</h1>;
    }
}