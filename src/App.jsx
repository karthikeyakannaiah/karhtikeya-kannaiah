import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import linkedin from './assets/linkedin.svg'
import angelist from './assets/angellist.svg'
import instagram from './assets/instagram.svg'
import github from './assets/github.svg'
import gmail from './assets/gmail.svg'
import arrowdown from './assets/arrow-down.png'
import karthik from './assets/karthik.jpeg'
import education from './content/education';
import Cards from './components/Cards';
import Projects from './components/Projects';
import Skills from './components/Skills';
import end from './assets/end.png'
function App() {
  return (
    <div className="m-3">
      <div className="text-light p-3 rounded">
        <div className="text-center profile-img">
          <img src={karthik} className="profile round" alt="..."></img>
        </div>
        <div className="display-5 text-center text-dark">Karthikeya Kannaiah</div>
        <div className="m-3 text-center bg-dark w-25 mx-auto d-flex flex-wrap justify-content-between p-1 rounded">
          <a href="https://www.linkedin.com/in/karthikeya-kannaiah-052176194/">
            <img className='rounded icon' src={linkedin} alt="" />
          </a>
          <a href="https://angel.co/karthikeya-kannaiah">
            <img className='rounded icon' src={angelist} alt="" />
          </a>
          <a href="https://github.com/karthikeyakannaiah">
            <img className='rounded icon' src={github} alt="" />
          </a>
          <a href="mailto: karthikeya009k@gmail.com">
            <img className='rounded icon' src={gmail} alt="" />
          </a>
        </div>
      </div>
      <div className="m-3 container-sm">
        <h3 className='text-dark display-6'>About me</h3>
        <p className='text-dark'>Self-paced Learner and an Enthusiast in Programming and Web development and worked on projects which have
          enhanced my skill set. I want to be an Explorer in a
          rapidly evolving world and technological advancements.
          I am currently working on Web frameworks like Reactjs,
          ViteJs etc.., and Programming and Machine Learning.</p>
      </div>
      <div className="d-flex my-4 justify-content-center flex-row">
        <img src={arrowdown} alt="" />
      </div>
      <div className="m-3 container">
        <h3 className='text-dark display-6'>Education</h3>
        <Cards content={education} />
      </div>
      <div className="d-flex my-4 justify-content-center flex-row">
        <img src={arrowdown} alt="" />
      </div>
      <div className="m-3 container">
        <h3 className='text-dark display-6'>Projects</h3>
        <Projects />
      </div>
      <div className="d-flex my-4 justify-content-center flex-row">
        <img src={arrowdown} alt="" />
      </div>
      <div className="m-3 container">
        <h3 className='text-dark display-6'>Skills</h3>
        <Skills />
      </div>
      <div className="d-flex my-4 justify-content-center flex-row">
        <img src={arrowdown} alt="" />
      </div>
      <div className="m-3 container">
        <h3 className='text-dark display-6'>Contact</h3>
        <p className='h6 m-4'>Email: karthikeya009k@gmail.com</p>
        <p className='h6 m-4'>Phone: +91 8179491018</p>
        <div className="h6 m-4">Home: Kurnool, Andhra Pradesh</div>
        <div className="h6 m-4">Current: Koramangala, Bengaluru</div>
        <div className="h6 m-4">Socials: <a href="https://www.instagram.com/karthikeya_k_/">instagram</a></div>
      </div>
      <div className="d-flex my-4 justify-content-center flex-row">
        <img src={end} alt="" />
      </div>
      <div className="w-50 my-4 text-center text-dark rounded container">
        @2022 Kaner Projects By Karthikeya
        <br />Powered By Vite+React and Bootstrap+CSS
      </div>
    </div>
  )
}

export default App
