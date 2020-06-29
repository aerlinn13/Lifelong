import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`padding: 0px 30px;`;

const TextInput = styled.TextInput`
	font-family: KhulaRegular;
	font-size: 30px;
	padding: 10px 30px 10px 30px;
	text-align: center;
	border-style: solid;
	border-bottom-width: 1px;
	border-color: #d8d8d8;
`;

const Label = styled.Text`
	font-family: KhulaRegular;
	text-align: center;
	font-size: 18px;
	padding-top: 15px;
`;

const Textfield = ({ label, placeholder, onChange, value, type = 'default' }) => {
	return (
		<Container>
			<Label>{label}</Label>
			<TextInput
				autoFocus
				placeholder={placeholder}
				keyboardType={type}
				onChangeText={(text) => onChange(text)}
				value={value}
			/>
		</Container>
	);
};

export default Textfield;
