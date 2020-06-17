import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`padding: 0px 30px;`;

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

const Textfield = ({ label, placeholder, onChange, type = 'default' }) => {
	return (
		<Container>
			<Label>{label}</Label>
			<TextInput placeholder={placeholder} keyboardType={type} onChangeText={(text) => onChange(text)} />
		</Container>
	);
};

export default Textfield;
