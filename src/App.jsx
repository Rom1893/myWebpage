import './App.css';
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Portfolio from "./Components/Portfolio/Portfolio"
import Summary from "./Components/Summary/Summary"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"


function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Summary/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
