import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            {/* <Link to="/resume">Resume</Link> */}
        </>
    )
}