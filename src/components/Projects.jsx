import github from '../assets/github.svg'
import hyperlink from '../assets/hyperlink.png'
import api from '../assets/api.png'
const Projects = () => {
    return (
        <div className="m-3">
            <div className="text-bg-dark p-3 my-4 rounded">
                <div className="h3 text-warning">Bro Its A Blog</div>
                <div className="mb-2 text-primary">
                    <a href="https://biab.herokuapp.com/">
                        <img className='rounded icon' src={hyperlink} alt="" />
                    </a>
                    <a href="https://biab-api.herokuapp.com/">
                        <img className='rounded icon' src={api} alt="" />
                    </a>
                    <a href="http://https://github.com/karthikeyakannaiah/B-I-A-B">
                        <img className='rounded icon' src={github} alt="" />
                    </a>
                </div>
                <div className="mb-3 text-light">
                    A simple blog project featuring jwt authentication, crud api and reactjs.
                </div>
            </div>
            <div className="text-bg-dark p-3 my-4 rounded">
                <div className="h3 text-warning">Let Us</div>
                <div className="mb-2 text-primary">
                    <a href="https://letus-7d9c3.web.app/">
                        <img className='rounded icon' src={hyperlink} alt="" />
                    </a>
                    <a href="http://https://github.com/karthikeyakannaiah/letus-firebase-project">
                        <img className='rounded icon' src={github} alt="" />
                    </a>
                </div>
                <div className="mb-3 text-light">
                    A not so sophisticated beginner endeavour of mine. It is personal journal kinda web app. Uses Google Firebase.
                </div>
            </div>
            <div className="text-bg-dark p-3 my-4 rounded">
                <div className="h3 text-warning">Breast Cancer Prediction</div>
                <div className="mb-2 text-primary">
                    <a href="https://github.com/karthikeyakannaiah/Breast-cancer-Prediction-using-ML">
                        <img className='rounded icon' src={github} alt="" />
                    </a>
                </div>
                <div className="mb-3 text-light">
                    Breast Cancer prediction using ML techniques.
                </div>
            </div>
            <div className="text-bg-dark p-3 my-4 rounded">
                <div className="h3 text-warning">Resume Builder</div>
                <div className="mb-2 text-primary">
                    <a href="https://github.com/karthikeyakannaiah/resume-builder">
                        <img className='rounded icon' src={github} alt="" />
                    </a>
                </div>
                <div className="mb-3 text-light">
                    Academic Project Submission. A basic resume generator uses a template.
                </div>
            </div>
            <div className="text-bg-dark p-3 my-4 rounded">
                <div className="h3 text-warning">Todo List React App</div>
                <div className="mb-2 text-primary">
                    <a href="https://todoreactappbykarthikeya.web.app/">
                        <img className='rounded icon' src={hyperlink} alt="" />
                    </a>
                    <a href="https://github.com/karthikeyakannaiah/TodoListReactApp">
                        <img className='rounded icon' src={github} alt="" />
                    </a>
                </div>
                <div className="mb-3 text-light">
                    This Todo App is done with help of reactjs. This is the first project I have done when started learning reactjs.
                </div>
            </div>
            <div className="text-bg-dark p-3 my-4 rounded">
                <div className="h3 text-warning">Discussion Timer</div>
                <div className="mb-2 text-primary">
                    <a href="https://discussontimerbyachiever.web.app/">
                        <img className='rounded icon' src={hyperlink} alt="" />
                    </a>
                    <a href="https://github.com/karthikeyakannaiah/discussiontimer">
                        <img className='rounded icon' src={github} alt="" />
                    </a>
                </div>
                <div className="mb-3 text-light">
                    A timer which can be used set limits to a discussion or speeches. Second project done on reactjs.
                </div>
            </div>
            <div className="text-bg-dark p-3 my-4 rounded">
                <div className="h3 text-warning">ML/DL</div>
                <div className="mb-2 text-primary">
                    <a href="https://github.com/karthikeyakannaiah/NeuralNetworks-and-ImageProcessing">
                        <img className='rounded icon' src={github} alt="" />
                    </a>
                    <a href="https://github.com/karthikeyakannaiah/ML-learning">
                        <img className='rounded icon' src={github} alt="" />
                    </a>
                </div>
                <div className="mb-3 text-light">
                    These are learning repos yet these have fair share of experiments. Handful of techniques have been explored.
                </div>
            </div>
        </div>
    );
}

export default Projects;