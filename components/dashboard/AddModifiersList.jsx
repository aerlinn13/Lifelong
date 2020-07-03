import React, { useState, useEffect } from 'react';
import { FlatList, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import lifespanModifiers from '../../data/lifespanModifiers';
import { updateWeight, addLifespanModifier, respawnOnboarding, removeAllUserModifiers } from '../../state/actions';
import fuzzySearch from '../../helpers/fuzzySearch';
import AddModifierCell from './AddModifierCell';

const Wrapper = styled.View`
	display: flex;
	width: ${(props) => `${Dimensions.get('window').width - 40}px`};
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

const Span = styled.Text`
	color: #8f8f8f;
	font-size: 16px;
	font-family: KhulaLight;
`;

const WeightTweaker = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	height: 60px;
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
	height: 60px;
`;

const EmptyCell = styled.View``;

const rowRenderer = (item, index, addLifespanModifier) => {
	if (item.type !== 'LAST') {
		return <AddModifierCell item={item} index={index} addLifespanModifier={addLifespanModifier} />;
	}
	return <Span>{item.text}</Span>;
};

const AddModifiersList = ({
	weight,
	updateWeight,
	addLifespanModifier,
	respawnOnboarding,
	removeAllUserModifiers,
	setAddModifiersMode
}) => {
	const [ filterText, setFilterText ] = useState('');
	const [ filteredModifiers, setFilteredModifiers ] = useState(fuzzySearch('', [ ...lifespanModifiers ]));

	const handlePress = (changeValue) => {
		const newValue = (parseFloat(weight) + changeValue).toFixed(1);
		updateWeight(newValue);
	};

	const handleSearchInputChange = (text) => {
		if (text.toLowerCase() === 'respawn') {
			respawnOnboarding();
			return;
		}

		if (text.toLowerCase() === 'purge all data') {
			removeAllUserModifiers();
			setFilterText('');
			setAddModifiersMode(false);
			return;
		}
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
				returnKeyType="done"
			/>
			<FlatList
				ItemSeparatorComponent={() => <Separator />}
				data={filteredModifiers}
				style={{ flexGrow: 2 }}
				renderItem={({ item, index }) => rowRenderer(item, index, addLifespanModifier)}
				keyExtractor={(item) => item.text}
				bounces={false}
				ListEmptyComponent={<EmptyCell />}
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
	updateWeight: (newWeight) => dispatch(updateWeight(newWeight)),
	addLifespanModifier: (direction, id, minutes) => dispatch(addLifespanModifier(direction, id, minutes)),
	respawnOnboarding: () => dispatch(respawnOnboarding()),
	removeAllUserModifiers: () => dispatch(removeAllUserModifiers())
});

const AddModifiersListContainer = connect(mapStateToProps, mapDispatchToProps)(AddModifiersList);

export default AddModifiersListContainer;
