import './Footer.css';
import { IoCodeWorking } from 'react-icons/io5';
import {CgFileDocument } from 'react-icons/cg';

export function Footer() {
    return (
        <>
            <div className="self-resources">
                <div className="resource">
                    <h1>Projects</h1>
                    <p><IoCodeWorking /></p>
                </div>
                <div className="resource">
                    <h1>Resume</h1>
                    <p><CgFileDocument /></p>
                </div>
            </div>

        </>
    )
}