import React from 'react';
import styled from 'styled-components/native';

const ParagraphText = styled.Text`
	font-family: KhulaRegular;
	font-size: 18px;
	padding: 10px 50px;
	line-height: 28px;
`;

const Paragraph = ({ children }) => <ParagraphText>{children}</ParagraphText>;

export default Paragraph;
