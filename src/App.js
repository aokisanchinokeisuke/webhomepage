import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import HeroPage from './Components/HeroPage.jsx';
import ServicePage from './Components/ServicePage.jsx';
import About from './Components/About.jsx';
import ServiceAll from './Components/ServiceAll.jsx';

function App() {
  return (
    <div>
        <Header/>
        <HeroPage/>
        <ServiceAll/>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
