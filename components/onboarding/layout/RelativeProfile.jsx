import React, { useState } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	padding: 0px 30px 30px 30px;
	border-style: solid;
	border-bottom-width: 1px;
	border-color: #d8d8d8;
`;

const TextInput = styled.TextInput`
	font-family: KhulaRegular;
	font-size: 20px;
	padding: 10px 30px 10px 30px;
	text-align: center;
	border-style: solid;
	border-bottom-width: 1px;
	border-color: #d8d8d8;
`;

const Option = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-top: 20px;
	width: 60%;
`;

const Checkbox = styled.View`
	height: 27px;
	width: 27px;
	border: 1px solid black;
	border-radius: 10px;
	background-color: ${(props) => (props.selected ? 'black' : 'white')};
`;

const Label = styled.Text`
	font-family: KhulaRegular;
	font-size: 18px;
	padding-top: 10px;
	text-align: center;
`;

const Text = styled.Text`
	font-family: KhulaRegular;
	font-size: 18px;
	padding-left: 20px;
`;

const RelativeProfile = ({ label, placeholder, relative, updateRelativeInfo }) => {
	const [ deceased, setDeceased ] = useState(false);
	const [ cause, setCause ] = useState(false);
	return (
		<Container>
			<Label>{label}</Label>
			<TextInput
				autoFocus
				placeholder={placeholder}
				keyboardType="number-pad"
				returnKeyType="done"
				onChangeText={(text) => updateRelativeInfo(relative, 'age', text)}
			/>
			<Option
				key="dead"
				onPress={() => {
					setDeceased(!deceased);
					updateRelativeInfo(relative, 'dead', !deceased);
				}}
			>
				<Checkbox selected={deceased} />
				<Text>Deceased</Text>
			</Option>
			<Option
				key="cause"
				onPress={() => {
					setCause(!cause);
					updateRelativeInfo(relative, 'cause', !cause);
				}}
			>
				<Checkbox selected={cause} />
				<Text>By natural cause</Text>
			</Option>
		</Container>
	);
};

export default RelativeProfile;
