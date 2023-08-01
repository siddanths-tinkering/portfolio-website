import './App.css';
import React from 'react';
import Home from './home';
import NavBar from './components/navBar';
import Experience from './experience';
import Projects from './projects';
import Interests from './interests';
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
	const location = useLocation();
  	return (
		<div className="App">
			<NavBar active={location.pathname.split("/")[1]}/>
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/interests' element={<Interests />} />
				</Routes>
			</div>
		</div>
  	);
}

export default App;
