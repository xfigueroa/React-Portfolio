


export const ProjectCard = ({ project }) => {    

    return (
        <div className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noreferrer"><button>Github Repo</button></a>
        </div>
    );
}
