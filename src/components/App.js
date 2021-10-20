import getQuote from '../functions/getQuote';
import sendTweet from '../functions/sendTweet';
import './App.css';

function App() {
  getQuote();

  return (
    <div className="App">
      <header>
        <h1 id="title">Random Quote Machine</h1>
      </header>

      <main>
        <p id="quote"></p>
        <p id="author"></p>

        <button id="get-quote" class="btn btn-default" onClick={getQuote}>Get Quote</button>
        <button id="tweet" class="btn btn-primary" onClick={sendTweet}>Tweet</button>
      </main>
    </div>
  );
}

export default App;
