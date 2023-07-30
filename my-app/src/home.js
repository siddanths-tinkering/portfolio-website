import './App.css';
import headshot from './images/headshot.jpg';

function Home() {
	return (
		<header className="App-header">
			<div className="container">
				<img className='image' src={headshot} />
				<div className='container1'>
					<b className='name'> I'm Siddanth.</b>
					<p className='description'> I'm interested in building things, as well as keeping said things safe from the bad guys.</p>
				</div>
			</div>
		</header>
	)
}

export default Home;