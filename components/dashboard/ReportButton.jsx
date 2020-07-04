import React from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

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
	bottom: 20px;
	right: 20px;
`;

const Text = styled.Text`
	color: white;
	font-size: 45px;
	line-height: 100px;
	font-family: KhulaSemiBold;
	transform: ${(props) => (props.addModifiersMode ? 'rotate(45deg)' : 'rotate(0deg)')};
`;

const ReportButton = ({ addModifiersMode, onPressReportButton }) => {
	return (
		<Wrapper addModifiersMode={addModifiersMode} onPress={onPressReportButton}>
			{addModifiersMode ? (
				<AntDesign name="close" size={24} color="white" />
			) : (
				<AntDesign name="plus" size={24} color="white" />
			)}
		</Wrapper>
	);
};

export default ReportButton;
