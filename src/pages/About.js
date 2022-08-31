import { Col, Divider, Row } from 'antd';
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
			<Row>
				<Col className='my-col' span={8}>
					col-8
				</Col>
				<Col className='my-col' span={8} offset={8}>
					col-8
				</Col>
			</Row>
			<Row>
				<Col className='my-col' span={6} offset={6}>
					col-6 col-offset-6
				</Col>
				<Col className='my-col' span={6} offset={6}>
					col-6 col-offset-6
				</Col>
			</Row>
			<Row>
				<Col className='my-col' span={12} offset={6}>
					col-12 col-offset-6
				</Col>
			</Row>
		</div>
	);
};

export default About;
