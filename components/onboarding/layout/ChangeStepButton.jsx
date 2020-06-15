import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
	background-color: #99d355;
	color: white;
	width: 60px;
	height: 30px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	top: 20px;
	right: 20px;
	border-radius: 10px;
`;

const ButtonText = styled.Text`
	color: white;
	font-family: LoraBold;
	font-size: 18px;
	text-align: center;
`;

const ChangeStepButton = ({ label, onPress }) => {
	return (
		<Button onPress={() => onPress()}>
			<ButtonText>{label}</ButtonText>
		</Button>
	);
};

export default ChangeStepButton;
