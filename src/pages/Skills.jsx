import htmlLogo from "../assets/images/html.png";
import cssLogo from "../assets/images/css-3.png";
import jsLogo from "../assets/images/js.png";
import nodeLogo from "../assets/images/Nodejs.png";
import tsLogo from "../assets/images/typescript.png";
import reactLogo from "../assets/images/react.png"; 


export const SkillsPage = () => {
    return (
        <div>
            <h1>Skills Proficiency</h1> 
                 <p>This is a list of the programming languages and frameworks that I have experience with. I am always looking to learn new technologies and improve my skills.</p>
            <div className="skills-container">  
                
                <div className="skills-box">
                <img className="imgLogo" src={htmlLogo} alt="html logo" /><p>HTML</p>                             
                </div>
                <div className="skills-box">
                <img className="imgLogo" src={cssLogo} alt="css logo" /><p>CSS</p>               
                </div>
                <div className="skills-box">
                <img className="imgLogo" src={jsLogo} alt="javascript logo" /><p>JavaScript</p>                
                </div>
                <div className="skills-box">
                <img className="imgLogo" src={nodeLogo} alt="node logo" /><p>Node.js</p>              
                </div>
                <div className="skills-box">
                <img className="imgLogo" src={tsLogo} alt="typescript logo" /><p>TypeScript</p>              
                </div>
                <div className="skills-box">
                <img className="imgLogo" src={reactLogo} alt="react logo" /><p>React</p>
                </div>
                
               
            </div>
        </div>
    );

};