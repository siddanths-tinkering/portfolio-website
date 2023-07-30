import './App.css';
import React from 'react';
import Home from './home';
import NavBar from './components/navBar';
import Projects from './projects';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
	<div className="App">
		<NavBar />
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</div>
  	</div>
  );
}

export default App;
