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
	background-color: #fda857;
	color: white;
	height: 40px;
	width: ${(props) => (props.wide ? '160px' : '120px')};
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

const ChangeStepButton = ({ label, onPress, wide }) => {
	return (
		<Wrapper>
			<Button onPress={() => onPress()} wide={wide}>
				<ButtonText>{label}</ButtonText>
			</Button>
		</Wrapper>
	);
};

export default ChangeStepButton;
