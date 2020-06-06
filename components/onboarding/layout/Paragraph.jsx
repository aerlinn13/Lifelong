import React from 'react';
import styled from 'styled-components/native';

const ParagraphText = styled.Text`
	font-family: LoraRegular;
	font-size: 18px;
	padding: 10px 30px;
	line-height: 30px;
`;

const Paragraph = ({ children }) => <ParagraphText>{children}</ParagraphText>;

export default Paragraph;
