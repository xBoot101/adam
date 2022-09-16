import './App.scss';
import 'antd/dist/antd.min.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Home2 from './pages/Home2';
import NavMenu from './pages/NavMenu';
import Content from './pages/Content';
import Carousel from './pages/myCarousel';
function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Carousel></Carousel>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/home2' element={<Home2 />} />
				<Route path='/menu' element={<NavMenu />} />
				<Route path='/content' element={<Content />} />
			</Routes>
		</div>
	);
}

export default App;
