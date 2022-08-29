import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
import './Home.scss';
const Home = () => {
	return (
		<div className='container'>
			<h2>Home page</h2>
			<Space>
				<SmileOutlined style={{ color: 'red' }} />
			</Space>
			<h4>Button uses ant design</h4>
			<Space>
				<Tooltip title='search'>
					<Button icon={<SearchOutlined />}>Search button</Button>
				</Tooltip>
				<Link to='/login'>
					<Tooltip title='link button'>
						<Button danger href='/login'>
							Login
						</Button>
					</Tooltip>
				</Link>
			</Space>
		</div>
	);
};

export default Home;
