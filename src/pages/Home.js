import React from 'react';
import { Link } from 'react-router-dom';
import {
	AppstoreOutlined,
	DownOutlined,
	MailOutlined,
	PhoneOutlined,
	SearchOutlined,
	SettingOutlined,
	SmileOutlined,
	TwitterOutlined,
	UploadOutlined,
} from '@ant-design/icons';
import {
	Button,
	Tooltip,
	Space,
	Divider,
	Typography,
	Row,
	Col,
	Upload,
	Popconfirm,
	Dropdown,
	Menu,
} from 'antd';
import './Home.scss';

const { Title, Paragraph, Text } = Typography;
const style = {
	background: '#0092ff',
	padding: '8px 0',
};

// Dropdown menu item

const menu = (
	<Menu
		items={[
			{
				label: '1st menu item',
				key: '1',
			},
			{
				label: '2nd menu item',
				key: '2',
			},
			{
				label: '3rd menu item',
				key: '3',
			},
		]}
	/>
);

const Home = () => {
	return (
		<div>
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
			<h2>Learn Ant Design Grid</h2>
			<Row gutter={[16, 24]}>
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

				<Col span={24}>
					<Space>
						<Text>
							Space using Crowded components horizontal spacing.
						</Text>
						<Button type='primary'>Button</Button>
						<Upload>
							<Button>
								<UploadOutlined /> Click to Upload
							</Button>
						</Upload>
						<Popconfirm
							title='Are you sure delete this task?'
							okText='Yes'
							cancelText='No'
						>
							<Button>Confirm</Button>
						</Popconfirm>
					</Space>
				</Col>
				<Col span={6}>
					{/* Dropdown menu */}
					<Dropdown overlay={menu}>
						<a onClick={(e) => e.preventDefault()} href='/'>
							<Space>
								Hover me
								<DownOutlined />
							</Space>
						</a>
					</Dropdown>
				</Col>
				<Col span={12}>
					<Menu mode='horizontal' defaultSelectedKeys={['mail']}>
						<Menu.Item key='mail' icon={<MailOutlined />}>
							Navigation One
						</Menu.Item>
						<Menu.SubMenu
							key='SubMenu'
							title='Navigation Two - Submenu'
							icon={<SettingOutlined />}
						>
							<Menu.Item key='two' icon={<AppstoreOutlined />}>
								Navigation Two
							</Menu.Item>
							<Menu.Item key='three' icon={<AppstoreOutlined />}>
								Navigation Three
							</Menu.Item>
							<Menu.ItemGroup title='Item Group'>
								<Menu.Item
									key='four'
									icon={<AppstoreOutlined />}
								>
									Navigation Four
								</Menu.Item>
								<Menu.Item
									key='five'
									icon={<AppstoreOutlined />}
								>
									Navigation Five
								</Menu.Item>
							</Menu.ItemGroup>
						</Menu.SubMenu>
						<Menu.Item key='call' icon={<PhoneOutlined />}>
							Navigation Six
						</Menu.Item>
					</Menu>
				</Col>
			</Row>
		</div>
	);
};

export default Home;
