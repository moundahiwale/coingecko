import './App.css';
import Cryptocurrencies from './components/cryptocurrencies/Cryptocurrencies';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Cryptocurrency Prices</p>
      </header>
      <Cryptocurrencies></Cryptocurrencies>
    </div>
  );
}

export default App;
