import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
	width: 60px;
	height: 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	background-color: ${(props) => (props.addModifiersMode ? 'black' : '#fda857')};
	position: absolute;
	bottom: 30px;
	right: 30px;
	z-index: 20;
`;

const Text = styled.Text`
	color: white;
	font-size: 45px;
	font-family: KhulaSemiBold;
	transform: ${(props) => (props.addModifiersMode ? 'rotate(45deg)' : 'rotate(0deg)')};
`;

const ReportButton = ({ addModifiersMode, onPressReportButton }) => {
	return (
		<Wrapper addModifiersMode={addModifiersMode} onPress={onPressReportButton}>
			<Text addModifiersMode={addModifiersMode}>{'+'}</Text>
		</Wrapper>
	);
};

export default ReportButton;
