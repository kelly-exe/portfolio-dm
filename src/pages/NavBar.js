import { Link } from 'react-router-dom';
import './NavBar.css';

export function NavBar() {
    return (
        <div className="nav-links">
            <Link to="/portfolio-dm">Home</Link>
            <Link to="/about">About Me</Link>
            {/* <Link to="/resume">Resume</Link> */}
        </div>

    )
}