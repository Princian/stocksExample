import logo from './logo.svg';
import './App.css';
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Stock Market Ticker Example
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
