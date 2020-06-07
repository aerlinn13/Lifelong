import React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
	font-family: LoraRegular;
	font-size: 30px;
	padding: 20px 30px 20px 30px;
	text-align: center;
	border-style: solid;
	border-bottom-width: 1px;
	border-color: #d8d8d8;
`;

const Label = styled.Text`
	font-family: LoraRegular;
	text-align: center;
	font-size: 18px;
	padding-top: 30px;
`;

const Textfield = ({ label, placeholder }) => (
	<React.Fragment>
		<Label>{label}</Label>
		<TextInput placeholder={placeholder} />
	</React.Fragment>
);

export default Textfield;
