import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Button = styled.TouchableOpacity`
	background-color: ${(props) => (props.disabled ? '#c0c0c0' : props.color || '#fda857')};
	opacity: ${(props) => (props.disabled ? 0.6 : 1)};
	color: black;
	width: ${(props) => (props.wide ? '160px' : '100px')};
	height: 40px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	border-radius: 10px;
	margin-top: 20px;
`;

const ButtonText = styled.Text`
	color: white;
	font-family: KhulaBold;
	font-size: 18px;
	text-align: center;
`;

const ConfirmButton = ({ label, onPress, disabled, wide, color }) => {
	return (
		<Container>
			<Button onPress={onPress} disabled={disabled} wide={wide} color={color}>
				<ButtonText>{label}</ButtonText>
			</Button>
		</Container>
	);
};

export default ConfirmButton;
