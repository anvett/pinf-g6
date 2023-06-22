import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Slider from './components/banner/slider';
import About from './components/about/about'
import Accordion from './components/accordion/accordion'
import Footer from './components/footer/footer';



function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Accordion />
      <Footer />
      
    </div>
  );
}

export default App;
