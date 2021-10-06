import './Footer.css';
import { IoCodeWorking } from 'react-icons/io5';
import { CgFileDocument } from 'react-icons/cg';

export function Footer() {
    return (
        <>
            <div className="self-resources">
                <div className="resource">
                    <a href="#projects-id">
                        <h1>Projects</h1>
                        <p><IoCodeWorking /></p>
                    </a>
                </div>
                <div className="resource">
                    <a href="https://pdfhost.io/v/lT0~lCLQI_ResumeDorkelisMoreno105" target="_blank"> <h1>Resume</h1>
                        <p><CgFileDocument /></p>
                    </a>
                </div>
            </div>

        </>
    )
}