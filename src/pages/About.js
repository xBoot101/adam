import { Divider } from 'antd';
import React from 'react';

const About = () => {
	return (
		<div>
			<h2>About page.</h2>

			<span>Hello</span>
			<Divider style={{ color: 'red' }} type='vertical' />

			<span>Hello</span>
			<Divider style={{ backgroundColor: 'red' }} type='vertical' />

			<span>Hello</span>
			<Divider orientation='left'>Horizontal</Divider>
			<Divider></Divider>
		</div>
	);
};

export default About;
