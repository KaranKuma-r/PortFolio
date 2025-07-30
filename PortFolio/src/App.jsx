
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import { Contribution } from './components/contribution'
import { Footer } from './components/footer'
import Home from './components/Home'
import { Navbar } from './components/Navbar'
import Projects from './components/Project'
import { Skill } from './components/Skill'


function App() {
 

  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About/></section>
      <section id="skill"><Skill /></section>
      <section id="projects"><Projects /></section>
       <section id="contribution"><Contribution /></section>
      <section id="contact"><Contact /></section>
      <Footer/>
    </>
  )
}

export default App
