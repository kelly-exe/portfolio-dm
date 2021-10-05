import './Home.css';
import { Footer } from '../Footer';
import { Projects } from '../Projects/Projects.js';
import { projectOne, projectTwo } from '../Projects/ProjectData.js';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
const imageFilePath = 'images/cherryblossoms.jpg';
const style = { backgroundImage: `url('${imageFilePath}')` };

export function Home() {
    return (
        <div className="body-div" style={style}>
            <div className="homeBase" >
                <div className="icons">
                    <p><a href="https://www.linkedin.com/in/dm8/" target="_blank"> <AiOutlineLinkedin /> </a> </p>
                    <p><a href="https://github.com/kelly-exe" target="_blank"> <AiOutlineGithub /> </a> </p>
                    <p><a href="https://twitter.com/kellz_exe" target="_blank"> <FiTwitter /> </a></p>
                    <p><a href="#" ><RiContactsLine /> </a> </p>
                </div>
                <div className="content">
                    <h1>Dorkelis Moreno</h1>
                    <p>Aspiring Web Developer and Software Engineer</p>
                </div>
            </div>
            <Footer />
            <Projects />
        </div>
    );
}