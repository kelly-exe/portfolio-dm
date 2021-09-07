import { projectOne, projectTwo } from './ProjectData.js';
import './Projects.css';

export function Projects() {
    return (
        <div className="projects-container" id="projects-id">
            <div className="project hvr-back-pulse">
                <img src={projectOne.image} />
                <div className="project-text">
                    <h1>{projectOne.name}</h1>
                    <p>{projectOne.description}</p>
                </div>
            </div>
            <div className="project hvr-back-pulse">
                <img src={projectTwo.image} />
                <div className="project-text">
                    <h1>{projectTwo.name}</h1>
                    <p>{projectTwo.description}</p>

                </div>
            </div>
            <div className="project hvr-back-pulse">
                <img src={projectTwo.image} />
                <div className="project-text">
                    <h1>{projectTwo.name}</h1>
                    <p>{projectTwo.description}</p>

                </div>
            </div>
        </div>

    )
}