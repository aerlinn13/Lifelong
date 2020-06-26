import React from 'react';
import styled from 'styled-components/native';
import timeCalculator from '../../calculators/timeCalculator';

const Wrapper = styled.View`
	width: 47%;
	height: 70px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: white;
	position: relative;
	padding: 15px 5px;
`;

const Header = styled.Text`
	color: black;
	font-size: 20px;
	font-family: KhulaRegular;
`;

const Text = styled.Text`
	color: black;
	font-size: 16px;
	font-family: KhulaLight;
`;

const Sign = styled.View`
	border-radius: 50px;
	background-color: ${(props) => props.color};
	width: 10px;
	height: 10px;
	position: absolute;
	top: 6px;
	left: 6px;
`;

const TimeIndicator = ({ time, label, color }) => (
	<Wrapper>
		<Sign color={color} />
		<Header>{timeCalculator(time)}</Header>
		<Text>{label}</Text>
	</Wrapper>
);

export default TimeIndicator;
