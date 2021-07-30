import React from "react";
import green_back from "./card_images/green_back.png";
import './Deck.css';
import Card from "./Card.jsx";

class Deck extends React.Component {

    shuffleDeck() {

        // Create all cards
        var allCards = [];
        for (var value = 1; value < 14; value++) {
            for (var suit = 0; suit < 4; suit++) {
                let card = { value: value, suit: suit }
                allCards.push(card);
            }
        }

        var cards = [];
        // Randomly choose one card at a time from leftover cards
        while (allCards.length > 0) {
            let index = Math.floor(Math.random() * allCards.length);
            cards.push(allCards[index]);
            allCards.splice(index, 1);
        }

        return cards;
    }

    constructor(props) {
        super(props);

        var cards = [];
        if (props.fillDeck === true) {
            console.log("Täytetään pakka korteil");
            cards = this.shuffleDeck();
        }
        else {
            console.log("ei täytetä");
        }

        this.state = {
            cards: cards,
            showCard: false
        };

        // // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        var newList = this.state.cards;
        newList.pop();
        this.setState(() => ({
            showCard: true,
            cards: newList
        }));
    }

    render() {

        // const cardList = this.state.cards.map((element, index) =>
        //     <li key={index}> Täältä tulee maa {element.suit} ja arvo {element.value}  </li>
        // )

        let length = this.state.cards.length;
        let top_card = this.state.cards[length - 1];
        if (this.state.cards.length > 1) {
            if (this.state.showCard === false) {
                return (
                    <div className="cardArea">
                        <div className="textOrButton">Kortteja jäljellä: {length}</div>
                        <img className="deck" onClick={this.handleClick} src={green_back} alt="green_back" />
                    </div>
                )
            }
            else {
                return (
                    <div className="cardArea">
                        <div className="textOrButton">Kortteja jäljellä: {length}</div>
                        <img className="deck" onClick={this.handleClick} src={green_back} alt="green_back" />
                        <div className="topCard" onClick={this.handleClick}>
                            <Card value={top_card.value} suit={top_card.suit} />
                        </div>
                    </div>
                )
            }
        }
        else if (this.state.cards.length === 1) {
            return (
                <div className="deck">
                    <Card value={top_card.value} suit={top_card.suit} />
                </div>
            )
        }
        else {
            return (
                <div className="deck"></div>
            )
        }

        // }
    }
}

export default Deck;