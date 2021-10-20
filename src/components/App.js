import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 id="title">Random Quote Machine</h1>
      </header>

      <main>
        <p id="quote"></p>
        <p id="author"></p>

        <button id="get-quote" class="btn btn-default">Get Quote</button>
        <button id="tweet" class="btn btn-primary">Tweet</button>
      </main>
    </div>
  );
}

export default App;
