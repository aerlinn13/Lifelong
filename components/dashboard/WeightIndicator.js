import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
	position: relative;
	display: flex;
	top: 0;
	left: 0;
`;

const Text = styled.Text`
	color: black;
	font-size: 20px;
	font-family: KhulaSemiBold;
	margin: 10px 0px -15px 22px;
`;

const WeightIndicator = ({ weight }) => (
	<Wrapper>
		<Text>{`WEIGHT ${weight}`}</Text>
	</Wrapper>
);

export default WeightIndicator;
