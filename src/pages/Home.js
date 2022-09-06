import React, { useState } from 'react';
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
	VerticalAlignTopOutlined,
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
	PageHeader,
	Descriptions,
	Tabs,
	Statistic,
	Pagination,
	Steps,
	message,
	DatePicker,
	BackTop,
	Card,
} from 'antd';
import './Home.scss';

const { Title, Paragraph, Text } = Typography;
const style = {
	background: '#0092ff',
	padding: '8px 0',
};
// Pagination function
const onChange = (pageNumber) => {
	console.log('Page: ', pageNumber);
};
// Page header tabs
const { TabPane } = Tabs;

// Steps to compete the tasks

const { Step } = Steps;

const renderContent = (column = 2) => (
	<Descriptions size='small' column={column}>
		<Descriptions.Item label='Created'>Lili Qu</Descriptions.Item>
		<Descriptions.Item label='Association'>421421</Descriptions.Item>
		<Descriptions.Item label='Creation Time'>2017-01-10</Descriptions.Item>
		<Descriptions.Item label='Effective Time'>2017-10-10</Descriptions.Item>
		<Descriptions.Item label='Remarks'>
			Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
		</Descriptions.Item>
	</Descriptions>
);

const extraContent = (
	<div
		style={{
			display: 'flex',
			width: 'max-content',
			justifyContent: 'flex-end',
		}}
	>
		<Statistic
			title='Status'
			value='Pending'
			style={{
				marginRight: 32,
			}}
		/>
		<Statistic title='Price' prefix='$' value={568.08} />
	</div>
);

const Content = ({ children, extra }) => (
	<div className='content'>
		<div className='main'>{children}</div>
		<div className='extra'>{extra}</div>
	</div>
);

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
const colStyle = {
	background: '#0092ff',
	padding: '8px 0',
};

const Home = () => {
	const steps = [
		{
			title: 'First',
			content: 'First-content',
		},
		{
			title: 'Second',
			content: 'Second-content',
		},
		{
			title: 'Last',
			content: 'Last-content',
		},
	];

	const [current, setCurrent] = useState(0);

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
	};
	return (
		<div>
			<h2>Home page</h2>
			<Divider></Divider>
			<Steps current={1}>
				<Step title='Finished' description='This is a description.' />
				<Step
					title='In Progress'
					subTitle='Left 00:00:08'
					description='This is a description.'
				/>
				<Step title='Waiting' description='This is a description.' />
			</Steps>
			<Divider></Divider>
			<h3>Switch Steps</h3>
			<Steps current={current}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className='steps-content'>{steps[current].content}</div>
			<div className='steps-action'>
				{current < steps.length - 1 && (
					<Button type='primary' onClick={() => next()}>
						Next
					</Button>
				)}
				{current === steps.length - 1 && (
					<Button
						type='primary'
						onClick={() => message.success('Processing complete!')}
					>
						Done
					</Button>
				)}
				{current > 0 && (
					<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
						Previous
					</Button>
				)}
			</div>
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
			<div className='site-page-header-ghost-wrapper'>
				<PageHeader
					ghost={false}
					onBack={() => window.history.back()}
					title='Rider'
					subTitle='This is a Rider subtitle'
					extra={[
						<Button key='3'>Operation</Button>,
						<Button key='2'>Operation</Button>,
						<Button key='1' type='primary'>
							Primary
						</Button>,
					]}
				>
					<Descriptions size='small' column={3}>
						<Descriptions.Item label='Created'>
							Bangle Tiger.
						</Descriptions.Item>

						<Descriptions.Item label='Creation Time'>
							2022-09-10
						</Descriptions.Item>
						<Descriptions.Item label='Effective Time'>
							2022-12-10
						</Descriptions.Item>
						<Descriptions.Item label='Remarks'>
							Mohammadpur , Dhaka, Bangladesh
						</Descriptions.Item>
					</Descriptions>
				</PageHeader>
			</div>
			<h2>
				Page Header Responsive: Under different screen sizes, there
				should be different performance
			</h2>
			<PageHeader
				className='site-page-header-responsive'
				style={{ backgroundColor: '#ddd' }}
				onBack={() => window.history.back()}
				title='Title'
				subTitle='This is a subtitle'
				extra={[
					<Button key='3'>Operation</Button>,
					<Button key='2'>Operation</Button>,
					<Button key='1' type='primary'>
						Primary
					</Button>,
				]}
				footer={
					<Tabs defaultActiveKey='1'>
						<TabPane tab='Details' key='1' />
						<TabPane tab='Rule' key='2' />
					</Tabs>
				}
			>
				<Content extra={extraContent}>{renderContent()}</Content>
				<DatePicker />
			</PageHeader>
			<Row
				style={{ margin: '20px 0 20px 0' }}
				gutter={[
					24,
					{
						xs: 16,
						sm: 24,
						md: 24,
						lg: 32,
					},
				]}
			>
				<Col className='gutter-row' span={6}>
					<div style={colStyle}>col-6</div>
				</Col>
				<Col className='gutter-row' span={6}>
					<div style={colStyle}>col-6</div>
				</Col>
				<Col className='gutter-row' span={6}>
					<div style={colStyle}>col-6</div>
				</Col>
				<Col className='gutter-row' span={6}>
					<div style={colStyle}>col-6</div>
				</Col>{' '}
				<Col className='gutter-row' span={6}>
					<div style={colStyle}>col-6</div>
				</Col>{' '}
				<Col className='gutter-row' span={6}>
					<div style={colStyle}>col-6</div>
				</Col>{' '}
				<Col className='gutter-row' span={6}>
					<div style={colStyle}>col-6</div>
				</Col>{' '}
				<Col className='gutter-row' span={6}>
					<div style={colStyle}>col-6</div>
				</Col>
			</Row>
			<Row
				style={{ margin: '20px 0' }}
				// gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
				gutter={[16, 24]}
			>
				<Col span={6}>
					<Card
						title='Default size card'
						extra={<a href='#'>More</a>}
						style={{
							width: 300,
						}}
					>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
				<Col span={6}>
					<Card
						title='Default size card'
						extra={<a href='#'>More</a>}
						style={{
							width: 300,
						}}
					>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
				<Col span={6}>
					<Card
						title='Default size card'
						extra={<a href='#'>More</a>}
						style={{
							width: 300,
						}}
					>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
				<Col span={6}>
					<Card
						title='Default size card'
						extra={<a href='#'>More</a>}
						style={{
							width: 300,
						}}
					>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
				<Col span={6}>
					<Card
						title='Default size card'
						extra={<a href='#'>More</a>}
						style={{
							width: 300,
						}}
					>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
			</Row>
			<h3>Basic Pagination</h3>
			<BackTop>
				<div
					style={{
						height: 40,
						width: 40,
						lineHeight: '40px',
						borderRadius: 4,
						backgroundColor: '#1088e9',
						color: '#fff',
						textAlign: 'center',
						fontSize: 20,
					}}
				>
					<VerticalAlignTopOutlined />
				</div>
			</BackTop>
			<Pagination defaultCurrent={1} total={50} />

			<Pagination
				showQuickJumper
				defaultCurrent={2}
				total={500}
				onChange={onChange}
			/>
			<br />
			<Pagination
				showQuickJumper
				defaultCurrent={2}
				total={500}
				onChange={onChange}
				disabled
			/>
		</div>
	);
};

export default Home;
