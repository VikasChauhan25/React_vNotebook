import React from 'react'
import img from "../Image/illus.png";
import linkedin from "../Image/linkedin.svg";
import insta from "../Image/instagram.svg";
import twitter from "../Image/twitter.svg";

export const About = () => {
    return (
        <div className="mt-3">
            <h2>About</h2>
            <div className="container row">
                <div className="content col-8 blur_bg">
                    <p>vNotebook App is a full-stack application based on MERN(MongoDB, Express, React, Node.js) stack to takeup notes and also to group them to a particular category. This application can perform CRUD operations on Notes for personalisation.</p>
                    <p>Connect with me at :</p>
                    <a href="https://www.linkedin.com/in/vikas-chauhan-3b0321165/" target="_blank"><img className="fontAwe" src={linkedin} alt="" /></a>
                    <a href="https://www.instagram.com/i_m_vikas25/" target="_blank"><img className="fontAwe" src={insta} alt="" /></a>
                    <a href="https://twitter.com/VikasCh2507?t=UJwGeARO2N5nQIWc6bhVng&s=09" target="_blank"><img className="fontAwe" src={twitter} alt="" /></a>
                    <br />
                    <br />
                    <p>Made with ❤️ in INDIA by Vikas Chauhan.</p>
                </div>
                <div className="image col-4">
                    <img src={img} alt="illustrator" />
                </div>
            </div>
        </div>
    )
}

export default About;
