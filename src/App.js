import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import './index.css'
import Certificate from './components/certificate/Certificate';


function App() {
  return (
    <>
    {/* particles js */}

    {/* navbar */}
    <Header />
    <Nav />
    <About />
    <Experience />
    <Projects />
    <Certificate />
    <Contacts />
    <Footer />

    {/* main page content */}
    {/* <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route index path='/about' element={<About/>}/>
      <Route index path='/skills' element={<Skills/>}/>
      <Route index path='/project' element={<Project/>}/>
      <Route index path='/contact' element={<Contact/>}/>
    </Routes> */}
    </>
  );
}

export default App;
