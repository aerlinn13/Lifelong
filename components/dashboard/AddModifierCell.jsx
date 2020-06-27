import React, { useState } from 'react';
import styled from 'styled-components/native';

const Cell = styled.View`
	height: 55px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Header = styled.Text`
	color: black;
	font-size: 20px;
	font-family: KhulaRegular;
	flex-grow: 2;
`;

const Label = styled.Text`
	color: white;
	font-size: 20px;
	font-family: KhulaRegular;
`;

const AddModifierButton = styled.TouchableOpacity`
	background-color: ${(props) => (props.isAdded ? '#8F8F8F' : props.isPositive ? '#7ED321' : '#D0021B')};
	height: 40px;
	min-width: 70px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const AddModifierCell = ({ item, index }) => {
	const [ isAdded, setAdded ] = useState(false);

	const handlePress = () => {
		setAdded(!isAdded);
	};
	return (
		<Cell key={index + item.text}>
			<Header>{item.text}</Header>
			<AddModifierButton isPositive={item.type === '+'} onPress={handlePress} isAdded={isAdded}>
				<Label>{item.value}</Label>
			</AddModifierButton>
		</Cell>
	);
};

export default AddModifierCell;
