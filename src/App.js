import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Watch from './components/Watch';
import Main from './components/Main';
import TokensDiv from './components/TokensDiv';
import Gallery from './components/Gallery';
import WhySupport from './components/WhySupport';
import Footer from './components/Footer';
import Takenomics from './components/Takenomics';
import Graph from './components/Graph';
import RoadMap from './components/RoadMap';
import Donation from './components/Donation';

function App() {
  return (
    <div className='App'>
      <div className="body">
        <NavBar></NavBar>
        {/* <div style={{ width: '80%', margin: 'auto' }}> */}
        <Watch />
        <Main />
        <TokensDiv />
        <Gallery />
        <Takenomics />
        <Graph />
        <RoadMap />
        <Donation />
        <WhySupport />
        {/* </div> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
