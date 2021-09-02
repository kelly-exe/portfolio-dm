import './Home.css';
import {Footer} from '../Footer'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
const imageFilePath = 'public/images/cherryblossom.jpg';
const style = { backgroundImage: `url('${imageFilePath}')` };

export function Home() {
    return (
        <div className="body-div" style={style}>
            <div className="homeBase" >
                <div className="icons">
                    <p><AiOutlineLinkedin /></p>
                    <p><AiOutlineGithub /></p>
                    <p><FiTwitter /></p>
                    <p><RiContactsLine /></p>
                </div>
                <div className="content">
                    <h1>Dorkelis Moreno</h1>
                    <p>Aspiring Web Developer and Software Engineer</p>
                </div>
                {/* <div className="background-image">
                <img src="images/cherryblossom.jpg" alt='Cherry blossom' />
            </div> */}
            </div>
            <Footer />
        </div>
    );
}