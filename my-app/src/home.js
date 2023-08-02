import './App.css';
import headshot from './images/headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Home() {
	return (
		<header className="App-header">
			<div id="container">
				<img className='image' src={headshot} />
				<div className='container1'>
					<div className='containera'>
						<b className='name'> I'm Siddanth.</b>
						<b className='description'> I'm interested to <b className='underline'>build</b> things, as well as keeping said things <b className='underline'>safe</b> from the bad guys.</b>
					</div>
					<div className='container2'>
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