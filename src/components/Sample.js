import React, {Component} from "react";

export default class Sample extends Component {
state = {
    a: 'Hello'
};

hadleButtonClick = () => {
    console.log("Inside Button Click");
    // this.state.a = "You pressed the Button"; wrong way
    this.setState({a: "you clicked the Button"});
};

render() {
    return (
        <div>
            <h1>{this.state.a}</h1>
            <button type="button" onClick={this.hadleButtonClick}>Click Me</button>
        </div>
    );
    }
}