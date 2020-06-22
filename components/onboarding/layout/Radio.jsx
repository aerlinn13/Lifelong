import React, { useState } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	padding: 10px 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Option = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-top: 20px;
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
	font-family: KhulaRegular;
	font-size: 18px;
	padding-top: 10px;
`;

const Text = styled.Text`
	font-family: KhulaRegular;
	font-size: 18px;
	padding-left: 20px;
`;

const Radio = ({ label, options, onPress }) => {
	const [ selected, setSelected ] = useState(null);
	const handlePress = (value) => {
		onPress(value);
		setSelected(value);
	};
	return (
		<Container>
			<Label>{label}</Label>
			{options.map((option, i) => (
				<Option key={option.value} onPress={() => handlePress(option.value)}>
					<Checkbox selected={selected === option.value} />
					<Text>{option.label}</Text>
				</Option>
			))}
		</Container>
	);
};

export default Radio;
