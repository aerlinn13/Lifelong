import React, { useState } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	padding: 0px 30px 30px 30px;
	border-style: solid;
	border-bottom-width: 1px;
	border-color: #d8d8d8;
`;

const TextInput = styled.TextInput`
	font-family: LoraRegular;
	font-size: 30px;
	padding: 20px 30px 20px 30px;
	text-align: center;
	border-style: solid;
	border-bottom-width: 1px;
	border-color: #d8d8d8;
`;

const Option = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin-top: 30px;
	width: 30%;
`;

const Checkbox = styled.View`
	height: 27px;
	width: 27px;
	border: 1px solid black;
	border-radius: 10px;
	background-color: ${(props) => (props.selected ? 'black' : 'white')};
`;

const Label = styled.Text`
	font-family: LoraRegular;
	font-size: 18px;
	padding-top: 30px;
	text-align: center;
`;

const Text = styled.Text`
	font-family: LoraRegular;
	font-size: 18px;
	padding-left: 20px;
`;

const RelativeProfile = ({ label, placeholder, onChange }) => {
	const [ deceased, setDeceased ] = useState(false);
	const [ cause, setCause ] = useState(false);
	return (
		<Container>
			<Label>{label}</Label>
			<TextInput placeholder={placeholder} onChangeText={(text) => onChange(text)} />
			<Option key="dead" onPress={() => setDeceased(!deceased)}>
				<Checkbox selected={deceased} />
				<Text>Deceased</Text>
			</Option>
			<Option key="cause" onPress={() => setCause(!cause)}>
				<Checkbox selected={cause} />
				<Text>By natural cause</Text>
			</Option>
		</Container>
	);
};

export default RelativeProfile;
