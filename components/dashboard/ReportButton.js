import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	background-color: #fda857;
	position: absolute;
	bottom: 10px;
	right: 30px;
`;

const Text = styled.Text`
	color: white;
	font-size: 30px;
	font-family: KhulaSemiBold;
`;

const ReportButton = () => (
	<Wrapper>
		<Text>{'+'}</Text>
	</Wrapper>
);

export default ReportButton;
