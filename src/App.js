import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/navbar';
import About from './components/about/about'
import Accordion from './components/accordion/accordion'
import Footer from './components/footer/footer';




function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
