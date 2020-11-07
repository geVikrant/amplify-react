import logo from './logo.svg';
import pic from './pic1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Welcome to Nana Foods India !
          <img src={pic} fluid />
        </p>

      </header>
    </div>
  );
}

export default App;
