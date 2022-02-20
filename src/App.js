import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Watch from './components/Watch';
import Main from './components/Main';
import TokensDiv from './components/TokensDiv';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className='App'>
      <div className="body">
        <NavBar></NavBar>
        <div style={{ width: '80%', margin: 'auto' }}>
          <Watch />
          <Main />
          <TokensDiv />
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
