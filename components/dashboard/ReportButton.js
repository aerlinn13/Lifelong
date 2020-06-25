import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
	width: 33%;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 25px;
	background-color: black;
	position: absolute;
	margin: 0px 33%;
	bottom: 5px;
`;

const Text = styled.Text`
	color: white;
	font-size: 16px;
	font-family: KhulaSemiBold;
`;

const ReportButton = () => (
	<Wrapper>
		<Text>Daily report</Text>
	</Wrapper>
);

export default ReportButton;
