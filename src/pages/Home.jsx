import photo from '../assets/images/animatedMe.png';

export const HomePage = () => { 

    return (
        <div>
            <div className="aboutMe-box">                
                <img src={photo} alt="" />
                <div>
                    <h1>About me</h1>    
                    <p className="aboutMe">
                    Hi, I’m a web and software development student passionate about building creative, functional digital solutions. I'm learning and constantly growing in skills like HTML, CSS, JavaScript, Node.js, TypesScript, React etc. Let’s create something amazing together! 
                    </p>
                </div>
            </div>
            <h2>Why I like to be a developer</h2>
            <div className="why-container">
                <div className="why-boxes"> 
                    <h2>Creativity</h2>
                    <p>
                        Create websites, apps, and software that are visually appealing and user-friendly.
                    </p>
                </div>  
                <div className="why-boxes">
                    <h2>Flexibility</h2>
                    <p>
                        As a developer, I would like to work from anywhere, anytime. Work from home, a coffee shop, or while traveling! 
                    </p>  

                </div>
                <div className="why-boxes"> 
                    <h2>Constant Learning</h2>
                    <p>
                        The tech industry is always evolving and I'm a person who loves to learn new things. I'm always looking for new technologies and trends to stay up-to-date.
                    </p>

                </div>
                <div className="why-boxes"> 
                    <h2>Problem Solving</h2>
                    <p>
                    Fixing bugs or creating efficient solutions can feel like solving puzzles every day. The sense of achievement when your code works is unbeatable!
                    </p>

                </div>

            </div>
        </div>
    );

}