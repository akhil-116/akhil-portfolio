import './Footer.css'
import github from "../../assets/icons/github.svg";
import insta from "../../assets/icons/insta.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import Button from "../Button/Button"
const Footer = () =>{
    return(
        <footer className='footer' id="contact">
            <div className='footer-container'>
                
                <div className='footer-tb'>
                    <p className='footer-text'>Got a project in mind?</p>
                    <Button type="primary" text="Send an Email"/>
                </div>

                <div className='contact-details'>

                    <div className='get-in-touch'>
                        <h3>Get in touch</h3>
                        <p>example@gmail.com</p>
                        <p>91 1234567890</p>
                    </div>
                    
                    <div className='img-container'>
                        <h3>Connect</h3>
                        <div className='social-div'>
                             <a href='#github' > <img src={github}/> </a>
                             <p>GitHub</p>
                        </div>
                        <div className='social-div'>
                             <a href='#instagram' > <img src={insta}/></a>
                             <p>Instagram</p>
                        </div>
                        <div className='social-div'>
                            <a href='#linkedin' > <img src={linkedin}/> </a>
                            <p>LinkedIn</p>

                        </div>
                        
                    </div>

                </div>
                <p className='footer-copyright'>©2025 Developed by Akhil Dasari. All rights reserved</p>
            </div>
            
        </footer>
    );
}

export default Footer;