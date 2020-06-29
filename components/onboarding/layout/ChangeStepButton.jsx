import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding-top: 20px;
`;

const Button = styled.TouchableOpacity`
	background-color: #779ecb;
	color: white;
	width: 200px;
	height: 40px;
	width: 100px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 10px;
`;

const ButtonText = styled.Text`
	color: white;
	font-family: KhulaBold;
	font-size: 18px;
	text-align: center;
`;

const ChangeStepButton = ({ label, onPress }) => {
	return (
		<Wrapper>
			<Button onPress={() => onPress()}>
				<ButtonText>{label}</ButtonText>
			</Button>
		</Wrapper>
	);
};

export default ChangeStepButton;
