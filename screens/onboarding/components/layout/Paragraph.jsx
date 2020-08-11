import React from 'react';
import styled from 'styled-components/native';

const ParagraphText = styled.Text`
	font-family: KhulaRegular;
	font-size: ${(props) => (props.size ? props.size + 'px' : '18px')};
	padding: 10px 50px;
	line-height: 28px;
	color: white;
`;

const Paragraph = ({ children, size }) => <ParagraphText size={size}>{children}</ParagraphText>;

export default Paragraph;
