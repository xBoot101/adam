import { Col, Divider, Row, Typography } from 'antd';
import React from 'react';
const { Title } = Typography;
const style = {
	background: '#0092ff',
	padding: '8px 0',
};

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
			<Row gutter={10}>
				<Col className='gutter-row' span={6}>
					<div style={style}>col-6</div>
				</Col>{' '}
				<Col className='gutter-row' span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className='gutter-row' span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className='gutter-row' span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col className='gutter-row' span={6}>
					<div style={style}>col-6</div>
				</Col>
			</Row>

			<Title level={2}>Responsive Grid Ant Design</Title>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col xs={2} sm={4} md={6} lg={8} xl={10} span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col span={6}>
					<div style={style}>col-6</div>
				</Col>
				<Col span={6}>
					<div style={style}>col-6</div>
				</Col>
			</Row>
		</div>
	);
};

export default About;
