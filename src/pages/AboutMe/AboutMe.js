import '../Home/Home.css';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
const imageFilePath = 'images/cherryblossom.jpg';
const style = { backgroundImage: `url('${imageFilePath}')` };
export function AboutMe() {
    return (

        <div className="body-div" style={style}>
            <div className="homeBase">
                <div className="icons">
                    <p><AiOutlineLinkedin /></p>
                    <p><AiOutlineGithub /></p>
                    <p><FiTwitter /></p>
                    <p><RiContactsLine /></p>
                </div>
                <div className="content">
                    <h1>About Me</h1>
                    <p>Recently having graduated with an Associates of Science in Computer
                        Science I have become interested in Web Development. I can grasp concepts
                        very quickly and I am eager to learn as much as I can and put what I learn
                        into use in a professional setting. blah blah blah blah blah blah blah blah blah blah blah blah
                        blah blah blah blah blah blah blah blah blah blah blah blah
                    </p>

                </div>

            </div>

        </div>

    )
}