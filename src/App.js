import './App.css';
import Header from '../src/components/Header'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Certifications from '../src/components/Certifications'
import Projects from '../src/components/Projects'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Footer />
      
    </div>
  );
}

export default App;
