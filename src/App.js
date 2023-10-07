
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImageSlider from './components/ImageSlider';
import Logo from './components/Logo';
import SearchNavBar from './components/SearchNavBar';
import image1 from '../src/assets/Gurgaon.png';
import image2 from '../src/assets/Hyderabad.png';
import image3 from '../src/assets/Delhi.png';
import image4 from '../src/assets/Banglore.png';
import Cards from './components/Cards';
import Steps from './components/Steps';
import image6 from '../src/assets/Chennai.png';
import Map from './components/Map';
import Footer from './components/Footer';
const images = [image1, image2, image3,image4, image6];



function App() {
  return (
    <> 
    <div className="App">
    <Header />
   <Logo />
   <SearchNavBar/>
   <HeroSection />
   <ImageSlider images={images}/>
   <Cards />
   <Steps />
   <Map />
   <Footer/>
  </div>
  </>
   
  );
}

export default App;
