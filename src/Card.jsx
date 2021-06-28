import React from "react";
import images from './card_images';
import './Card.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            card: {
                value: props.value,
                suit: props.suit
            }
        };
    }

    componentDidUpdate(prevProps) {
        if(prevProps.value !== this.props.value || prevProps.suit !== this.props.suit) {
            this.setState({card: {value: this.props.value, suit: this.props.suit}});
        }
    }

    getCardName(card) {
        let suits = ['C','D','H','S'];
        let value;
        if (card.value === 0) {
            value = 'A';
        }
        else {
            value = String(card.value);
        }
        const card_name = suits[card.suit] + value;
        console.log("Uusi korttinimemme on: " + card_name);
        return card_name;
    }

    render() {
        const cardName = this.getCardName(this.state.card);
        return (
            <img className="card_image" src={images[cardName]} alt={"Korttikuvaa ei löydy"} />
        )
    }
}

export default Card;