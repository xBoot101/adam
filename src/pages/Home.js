import React from 'react';
import { Link } from 'react-router-dom';
import {
	SearchOutlined,
	SmileOutlined,
	TwitterOutlined,
} from '@ant-design/icons';
import { Button, Tooltip, Space, Divider, Typography } from 'antd';
import './Home.scss';

const { Title, Paragraph, Text } = Typography;
const Home = () => {
	return (
		<div className='container'>
			<h2>Home page</h2>
			<Divider></Divider>
			<Typography>
				<Title>Introduction</Title>
				<Paragraph>
					In the process of internal desktop applications development,
					many different design specs and implementations would be
					involved, which might cause designers and developers
					difficulties and duplication and reduce the efficiency of
					development.
				</Paragraph>
				<Paragraph>
					After massive project practice and summaries, Ant Design, a
					design language for background applications, is refined by
					Ant UED Team, which aims to{' '}
					<Text strong>
						uniform the user interface specs for internal background
						projects, lower the unnecessary cost of design
						differences and implementation and liberate the
						resources of design and front-end development
					</Text>
					.
				</Paragraph>
				<Title level={2}>Guidelines and Resources</Title>
				<Paragraph>
					We supply a series of design principles, practical patterns
					and high quality design resources (<Text code>Sketch</Text>{' '}
					and <Text code>Axure</Text>), to help people create their
					product prototypes beautifully and efficiently.
				</Paragraph>

				<Divider />
			</Typography>

			<Text>Ant Design Icon</Text>
			<Space>
				<br />
				<Paragraph>Some icon</Paragraph>
				<TwitterOutlined style={{ color: 'blue' }} />
				<SmileOutlined style={{ color: 'red' }} />
			</Space>
			<h4>Button uses ant design</h4>
			<Space>
				<Tooltip title='search'>
					<Button icon={<SearchOutlined />}>Search button</Button>
				</Tooltip>

				<Tooltip title='link button'>
					<Button danger>
						<Link to='/login'>Login</Link>
					</Button>
				</Tooltip>
			</Space>
		</div>
	);
};

export default Home;
