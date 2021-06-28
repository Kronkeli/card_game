import './App.css';
import Deck from './Deck.jsx';

function App() {
  return (
    <div className="App">
      <div className="gameboard">
        <Deck cardsVisible={true} fillDeck={false} />
        <Deck cardsVisible={false} fillDeck={true} />
      </div>
    </div>
  );
}

export default App;
