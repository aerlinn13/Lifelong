import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
	position: relative;
	display: flex;
	top: 0;
	right: 0;
`;

const Text = styled.Text`
	color: black;
	font-size: 20px;
	font-family: KhulaLight;
	margin: 10px 22px -15px 0px;
`;

const BMIIndicator = ({ bmi }) => (
	<Wrapper>
		<Text>{`${bmi.toFixed(3)} BMI`}</Text>
	</Wrapper>
);

export default BMIIndicator;
