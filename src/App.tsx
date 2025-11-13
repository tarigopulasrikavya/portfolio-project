import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
import Certifications from './components/Certifications';
import ResumeButton from './components/ResumeButton';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <CodingProfiles />
      <Certifications />
      <ResumeButton />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
