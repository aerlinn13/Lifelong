import React from 'react';
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
	justify-content: space-between;
	align-items: center;
	margin-top: 30px;
	width: 30%;
`;

const Checkbox = styled.View`
	height: 44px;
	width: 44px;
	border: 1px solid black;
	border-radius: 10px;
	background-color: ${(props) => (props.selected ? 'black' : 'white')};
`;

const Label = styled.Text`
	font-family: LoraRegular;
	font-size: 18px;
	padding-top: 30px;
`;

const Text = styled.Text`
	font-family: LoraRegular;
	font-size: 18px;
	padding-left: 20px;
`;

const Radio = ({ label, options, selectedValue, onPress }) => {
	return (
		<Container>
			<Label>{label}</Label>
			{options.map((option, i) => (
				<Option key={option.value} onPress={() => onPress(option.value)}>
					<Checkbox selected={selectedValue === option.value} />
					<Text>{option.label}</Text>
				</Option>
			))}
		</Container>
	);
};

export default Radio;
