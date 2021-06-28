import React from "react";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            suit: props.suit
        };
    }
    render() {
        return (<div>Kortin arvo on {this.state.value}</div>)
    }
}

export default Card;