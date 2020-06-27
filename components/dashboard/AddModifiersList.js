import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import lifespanModifiers from '../../data/lifespanModifiers';
import { updateWeight } from '../../state/actions';
import fuzzySearch from '../../helpers/fuzzySearch';

const Wrapper = styled.View`
	display: flex;
	flex-direction: column;
	flex-grow: 2;
	border-radius: 10px;
	margin: 20px;
	padding: 0px 15px;
	background-color: white;
`;

const Separator = styled.View`
	height: 1px;
	background-color: #f3f3f3;
`;

const Cell = styled.View`
	height: 55px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const EmptyCell = styled(Cell)`
justify-content: center;
`;

const Header = styled.Text`
	color: black;
	font-size: 20px;
	font-family: KhulaRegular;
	flex-grow: 2;
`;

const Label = styled.Text`
	color: #8f8f8f;
	font-size: 20px;
	font-family: KhulaLight;
`;

const Span = styled.Text`
	color: #8f8f8f;
	font-size: 16px;
	font-family: KhulaLight;
`;

const Sign = styled.View`
	border-radius: 50px;
	background-color: ${(props) => props.type};
	width: 10px;
	height: 10px;
	margin-right: 8px;
	margin-bottom: 5px;
`;

const WeightTweaker = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	height: 80px;
`;

const WeightButton = styled.TouchableOpacity`
	width: 50px;
	height: 30px;
	background-color: white;
`;

const WeightButtonText = styled.Text`
	font-size: 16px;
	font-family: KhulaLight;
	color: black;
`;

const WeightLabel = styled.Text`
	width: 60px;
	font-size: 24px;
	font-family: KhulaRegular;
	color: black;
`;

const SearchInput = styled.TextInput`
	font-size: 20px;
	font-family: KhulaLight;
	color: #8f8f8f;
	height: 80px;
`;

const rowRenderer = (item, index) => {
	if (item.type !== 'LAST') {
		return (
			<Cell key={index + item.text}>
				<Sign type={item.type === '+' ? '#7ED321' : '#D0021B'} />
				<Header>{item.text}</Header>
				<Label>{`${item.value}`}</Label>
			</Cell>
		);
	}
	return (
		<Cell key={item.type}>
			<Span>{item.text}</Span>
		</Cell>
	);
};

const AddModifiersList = ({ weight, updateWeight }) => {
	const [ filterText, setFilterText ] = useState('');
	const [ filteredModifiers, setFilteredModifiers ] = useState(lifespanModifiers);

	const handlePress = (changeValue) => {
		const newValue = (parseFloat(weight) + changeValue).toFixed(1);
		updateWeight(newValue);
	};

	const handleSearchInputChange = (text) => {
		setFilterText(text);
		setFilteredModifiers(fuzzySearch(text, lifespanModifiers));
	};

	return (
		<Wrapper>
			<WeightTweaker>
				<WeightButton onPress={() => handlePress(-0.1)}>
					<WeightButtonText>–100g</WeightButtonText>
				</WeightButton>
				<WeightLabel>{weight}</WeightLabel>
				<WeightButton onPress={() => handlePress(0.1)}>
					<WeightButtonText>+100g</WeightButtonText>
				</WeightButton>
			</WeightTweaker>
			<Separator />
			<SearchInput
				placeholder={`Try 'no red meat today'`}
				value={filterText}
				onChangeText={handleSearchInputChange}
			/>
			<FlatList
				ItemSeparatorComponent={() => <Separator />}
				data={filteredModifiers}
				style={{ flexGrow: 2 }}
				renderItem={({ item, index }) => rowRenderer(item, index)}
				keyExtractor={(item) => item.text}
				bounces={false}
				ListEmptyComponent={
					<EmptyCell>
						<Span>Tap orange button to add lifespan modifiers</Span>
					</EmptyCell>
				}
			/>
		</Wrapper>
	);
};

const mapStateToProps = (state) => {
	return {
		weight: state.weight
	};
};

const mapDispatchToProps = (dispatch) => ({
	updateWeight: (newWeight) => dispatch(updateWeight(newWeight))
});

const AddModifiersListContainer = connect(mapStateToProps, mapDispatchToProps)(AddModifiersList);

export default AddModifiersListContainer;
