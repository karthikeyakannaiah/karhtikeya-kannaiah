import "./App.css";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import gmail from "./assets/gmail.svg";
import karthik from "./assets/karthik.jpeg";
import education from "./content/education";
import Cards from "./components/Cards";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="mt-5 p-1 box-border antialiased">
      <div className="flex flex-col">
        <div className="mx-auto">
          <img
            src={karthik}
            className="rounded-full max-h-48 border-4 border-black border-dashed p-1"
            alt="..."
          ></img>
        </div>
        <div className="text-center text-5xl p-2 m-4 hover:underline">
          Karthikeya Kannaiah
        </div>
        <div className="mx-auto bg-slate-900 p-2 w-max rounded-lg drop-shadow-lg flex flex-row">
          <a href="https://www.linkedin.com/in/karthikeya-kannaiah-052176194/">
            <img className="m-1" src={linkedin} alt="" />
          </a>
          <a href="https://github.com/karthikeyakannaiah">
            <img className="m-1" src={github} alt="" />
          </a>
          <a href="mailto: karthikeya009k@gmail.com">
            <img className="m-1" src={gmail} alt="" />
          </a>
        </div>
      </div>
      <div className="m-5 mx-auto bg-black text-white p-5 rounded-lg lg:max-w-4xl">
        <h3 className="text-3xl text-yellow-400 text-center p-1">About me</h3>
        <p className="text-center p-2">
          Self-paced Learner and an Enthusiast in Programming and Web
          development and worked on projects which have enhanced my skill set. I
          want to be an Explorer in a rapidly evolving world and technological
          advancements. I am currently working on Web frameworks based on
          ReactJS like ViteJS, NextJs etc.., and Programming and Machine
          Learning.
        </p>
      </div>
      <div className="m-5 mx-auto bg-slate-900 text-white p-5 rounded-lg lg:max-w-4xl">
        <h3 className="text-3xl text-yellow-400 text-center p-1">Education</h3>
        <Cards content={education} />
      </div>
      <div className="m-5 mx-auto bg-slate-900 text-white p-5 rounded-lg lg:max-w-4xl">
        <h3 className="text-3xl text-yellow-400 text-center p-1">Projects</h3>
        <Projects />
      </div>
      <div className="m-5 mx-auto text-center bg-white p-5 text-black rounded-lg lg:max-w-4xl">
        <h3 className="text-3xl text-center p-1">Skills</h3>
        <Skills />
        <span className="text-sm text-slate-500">And many more...</span>
      </div>

      <div className="m-5 mx-auto text-center bg-black p-5 text-white rounded-lg lg:max-w-4xl">
        <h3 className="text-3xl text-yellow-400 text-center p-1">Contact</h3>
        <span className="text-sm text-slate-500">Email</span>
        <p className="m-3">karthikeya009k@gmail.com</p>
        <p className="m-3">doctorchaos11@gmail.com</p>
        <span className="text-sm text-slate-500">Phone</span>
        <p className="m-3">+91 8179491018</p>
        <span className="text-sm text-slate-500">Home</span>
        <div className="m-3">Kurnool, Andhra Pradesh</div>
        <span className="text-sm text-slate-500">Current</span>
        <div className="m-3">Koramangala, Bengaluru</div>
      </div>
      <div className="m-6 text-xs text-center text-black">
        @2023 Kaner Projects By Karthikeya Kannaiah.
      </div>
    </div>
  );
}

export default App;
