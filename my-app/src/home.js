import './App.css';
import headshot from './images/headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';



function Home() {
	const welcomeTexts = ["Welcome", "ようこそ", "स्वागत"]
	const [welcomeText, setWelcomeText] = useState(welcomeTexts[0]);

	const switchLanguages = () => {
		const idx = (welcomeTexts.indexOf(welcomeText) + 1) % 3;
		setWelcomeText(welcomeTexts[idx]);
		clearInterval(timeInterval);
	}

	var timeInterval = setInterval(switchLanguages, 1000); // Change text every second

	return (
		<header className="App-header">
			<div id="container">
				<div className='container1'>
					<img className="headshot" src={headshot}></img>
					<div className='container2'>
						<b className="name"> I'm Siddanth and this who I am. </b>
						<b className="welcome">{welcomeText}</b>
					</div>
					<div className='container3'>
						<a href="https://drive.google.com/file/d/1vX056xS8FLzznp7K-__jHS51GNBlWYA3/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile} /></a>
						<a href="mailto:siddanthrumralkar@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
    	  				<a href="https://github.com/wowsiddanth?tab=repositories" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    	  				<a href="https://medium.com/@siddanthumralkar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMedium} /></a>
    	  				<a href="https://www.linkedin.com/in/siddanth-umralkar/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Home;