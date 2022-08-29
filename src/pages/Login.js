import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { GoogleCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div>
			<h2>Login page</h2>
			<Form
				name='basic'
				labelCol={{
					span: 2,
				}}
				wrapperCol={{
					span: 10,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='Username'
					name='username'
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name='remember'
					valuePropName='checked'
					wrapperCol={{
						offset: 2,
						span: 10,
					}}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 2,
						span: 10,
					}}
				>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
			<p>Login form added from ant design.</p>
			<Link to='/'>
				<GoogleCircleFilled
					style={{ fontSize: '30px' }}
					twoToneColor='#eb2f96'
				/>
			</Link>
		</div>
	);
};

export default Login;
