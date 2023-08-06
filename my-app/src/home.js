import './App.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import headshot from './images/headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'



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
			<Helmet>
				<meta charSet="utf-8" />
      			<title>Home</title>
			</Helmet>
			<div className="app-container">
				<div className='app-container1'>
					<img className="headshot" src={headshot}></img>
					<div className='app-container2'>
						<b className="name"> I'm Siddanth and this is who I am. </b>
						<b className="welcome">{welcomeText}</b>
					</div>
					<div className='app-container3'>
						<a className="links" href="https://drive.google.com/file/d/1GmDu8efHFUrOx9YvA4-Oqe4sA4FdkZUl/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile} /></a>
						<a className="links" href="mailto:siddanthrumralkar@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
    	  				<a className="links" href="https://github.com/wowsiddanth?tab=repositories" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    	  				<a className="links" href="https://medium.com/@siddanthumralkar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMedium} /></a>
    	  				<a className="links" href="https://www.linkedin.com/in/siddanth-umralkar/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Home;