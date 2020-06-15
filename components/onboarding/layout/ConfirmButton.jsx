import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Button = styled.TouchableOpacity`
	background-color: #779ecb;
	color: black;
	width: 100px;
	height: 40px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	border-radius: 10px;
	margin-top: 40px;
`;

const ButtonText = styled.Text`
	color: white;
	font-family: LoraBold;
	font-size: 18px;
	text-align: center;
`;

const ConfirmButton = ({ label, onPress }) => {
	return (
		<Container>
			<Button onPress={onPress}>
				<ButtonText>{label}</ButtonText>
			</Button>
		</Container>
	);
};

export default ConfirmButton;
