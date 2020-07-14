import React from 'react';
import styled from 'styled-components/native';

const Header = styled.Text`
	text-align: left;
	font-size: 22px;
	font-family: KhulaSemiBold;
	padding: 22px 20px 10px 50px;
	color: white;
`;

const OnboardingHeader = ({ children }) => <Header>{children}</Header>;

export default OnboardingHeader;
