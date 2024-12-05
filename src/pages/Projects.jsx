import { ProjectCard } from "../components/ProjectCard";

export const ProjectsPage = () => {
    const project = [
    {
        name: "Cosmic Quest Webpage",
        description: "This is the first project that I work as group to create a fantasy event webpage.",
        url: "https://github.com/xfigueroa/CosmicQuest-Project"
    },
    {
        name: "README Generator",
        description: "This is a command-line application built with Node.js that generates a professional README.md file based on user input.",
        url: "https://github.com/xfigueroa/README-Generator"
    },
    {
        name: "Company Database Manager",
        description: "Company-Database-Manager is a command-line interface (CLI) application for managing a company's database.",
        url: "https://github.com/xfigueroa/Company-Database-Manager"
    },
    {
        name: "Weather Dashboard",
        description: "This is a weather dashboard that allows the user to search for a city and view the current weather and 5-day forecast.",
        url: "https://github.com/xfigueroa/Weather-Dashboard"
    },  
    {
        name: "Vehicle Builder",
        description: "This command-line application allows you to manage various types of vehicles, including Cars, Trucks, and Motorbikes. You can create vehicles, perform actions on them, and manage towing capabilities for trucks.",
        url: "https://github.com/xfigueroa/Vehicle-Builder"
    },  
            
];
    
    return (
        <div>
            <h1>Projects</h1>
            <p>Here are some of the projects I have worked on:</p>
            <div className="projects-container">     
            {project.map((project, index) => (
                <ProjectCard key={index} project={project} />   
            ))}    
            </div>        
        </div>  
    );
};