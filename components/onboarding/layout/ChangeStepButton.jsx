import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
	background-color: #ff9153;
	color: white;
	width: ${(props) => (props.wide ? '100px' : '60px')};
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
	font-family: KhulaBold;
	font-size: 18px;
	text-align: center;
`;

const ChangeStepButton = ({ label, onPress, wide }) => {
	return (
		<Button onPress={() => onPress()} wide={wide}>
			<ButtonText>{label}</ButtonText>
		</Button>
	);
};

export default ChangeStepButton;
