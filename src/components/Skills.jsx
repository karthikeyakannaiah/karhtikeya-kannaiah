import react from '../assets/skills/react.svg'
import vite from '../assets/skills/vite.svg'
import cpp from '../assets/skills/cpp.png'
import js from '../assets/skills/js.svg'
import python from '../assets/skills/python.svg'
import tensorflow from '../assets/skills/tensorflow.svg'
const Skills = () => {
    return (
        <div className="m-3 bg-light bg-gradient d-flex flex-wrap justify-content-between p-3 rounded">
            <a href="https://www.javascript.com/">
                <img className='rounded icon-l' src={js} alt="" />
                javascript
            </a>
            <a href="https://reactjs.org/">
                <img className='rounded icon-l' src={react} alt="" />
                react
            </a>
            <a href="https://cplusplus.com/">
                <img className='rounded icon-l' src={cpp} alt="" />
                C++
            </a>
            <a href="https://www.python.org/">
                <img className='rounded icon-l' src={python} alt="" />
                python
            </a>
            <a href="https://vitejs.dev/">
                <img className='rounded icon-l' src={vite} alt="" />
                vite
            </a>
            <a href="https://www.tensorflow.org/">
                <img className='rounded icon-l' src={tensorflow} alt="" />
                ML/DL
            </a>
        </div>
    );
}

export default Skills;