import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	padding-top: 20px;
`;

const Header = styled.Text`
	color: black;
	font-size: 20px;
	font-family: KhulaLight;
`;

const ModifiersFeed = ({ time, label, color }) => (
	<Wrapper>
		<Header>Latest lifespan modifiers</Header>
	</Wrapper>
);

export default ModifiersFeed;
