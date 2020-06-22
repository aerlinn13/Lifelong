import React from 'react';
import styled from 'styled-components/native';

const Header = styled.Text`
	text-align: left;
	font-size: 24px;
	font-family: KhulaLight;
	padding: 20px 20px 10px 20px;
`;

const OnboardingHeader = ({ children }) => <Header>{children}</Header>;

export default OnboardingHeader;
