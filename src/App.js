
import './App.css';
import Cards from './components/Cards/Cards';
import Carousels1 from './components/Carousels/Carousels1';
import Carousels10 from './components/Carousels/Carousels10';
import Carousels2 from './components/Carousels/Carousels2';
import Carousels3 from './components/Carousels/Carousels3';
import Carousel4 from './components/Carousels/Carousels4';
import Carousel5 from './components/Carousels/Carousels5';
import Carousel6 from './components/Carousels/Carousels6';
import Carousel7 from './components/Carousels/Carousels7';
import Carousel8 from './components/Carousels/Carousels8';
import Carousels9 from './components/Carousels/Carousels9';
import Brand from './components/Deals/Brand';
import Deals from './components/Deals/Deals';
import Discover from './components/Discover/Discover';
import Exclusives from './components/Exclusives/Exclusives';
import Nav1 from './components/Nav/Nav1';

function App() {
  return (
    <div className="App">
      <Nav1 />
      <Carousels1 />
      <Carousels2 />
      <Carousels3 />
      <Exclusives />
      <Carousel4 />
      <Deals />
      <Carousel5 />
      <Carousel6 />
      <Carousel7 />
      <Carousel8 />
      <Brand />
      <Carousels9 />
      <Carousels10 />
      <Discover />
      <Cards />
    </div>
  );
}

export default App;
