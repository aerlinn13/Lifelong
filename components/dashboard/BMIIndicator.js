import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	top: 0;
	right: 0;
`;

const Text = styled.Text`
	color: black;
	font-size: 20px;
	font-family: KhulaLight;
	margin: 10px 22px -15px 0px;
`;

const ColouredText = styled(Text)`
color: ${(props) => getColor(props.bmi)};
margin: 10px 5px -15px 0px;
font-family: KhulaSemiBold;
`;

const getColor = (bmi) => {
	if (bmi > 25 || bmi < 18) {
		return '#D0021B';
	}
};

const BMIIndicator = ({ bmi }) => {
	if (!bmi) {
		return null;
	}
	return (
		<Wrapper>
			<ColouredText bmi={bmi}>{bmi.toFixed(3)}</ColouredText>
			<Text>{`BMI`}</Text>
		</Wrapper>
	);
};

export default BMIIndicator;
