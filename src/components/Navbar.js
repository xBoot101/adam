import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	let activeStyle = {
		textDecoration: 'none',
		color: 'red',
	};

	return (
		<nav className='navigation'>
			<ul>
				<li>
					<NavLink
						to='/'
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/home2'
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Home2
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/about'
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/login'
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Login
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/signup'
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Sign up
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/menu'
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Nav Menu
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/content'
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Content
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
