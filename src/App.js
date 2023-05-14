// import logo from './logo.svg';
import './App.css';
import Left from './components/left/Left';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Right from './components/right/Right';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Left /> */}
      {/* <Right /> */}
      <Main />
    </div>
  );
}

export default App;
