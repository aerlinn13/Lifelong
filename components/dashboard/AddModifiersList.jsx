import React, { useState, useEffect } from 'react';
import { FlatList, Dimensions, Keyboard, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import {
	updateWeight,
	addLifespanModifier,
	respawnOnboarding,
	removeAllUserModifiers,
	removeLastModifier
} from '../../state/actions';
import fuzzySearch from '../../helpers/fuzzySearch';
import AddModifierCell from './AddModifierCell';
import Feedback from './Feedback';
import { ConfirmButton } from '../onboarding/layout';

const Wrapper = styled.View`
	display: flex;
	width: ${() => `${Dimensions.get('window').width - 40}px`};
	min-height: 150px;
	flex-direction: column;
	border-radius: 10px;
	margin: 20px;
	padding: 0px 15px;
	background-color: white;
	z-index: 1000;
	position: relative;
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

const WeightButton = styled(TouchableOpacity)`
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
	width: 50px;
	font-size: 24px;
	font-family: KhulaRegular;
	color: black;
`;

const Search = styled.View`
	height: 60px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

const SearchInput = styled(TextInput)`
	display: flex;
	flex-grow: 3;
	font-size: 20px;
	font-family: KhulaLight;
	color: #8f8f8f;
	height: 60px;
`;

const ClearButton = styled(TouchableOpacity)``;

const ModalWrapper = styled.View`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ModalBody = styled.View`
	width: 80%;
	height: 45%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #000;
	border-radius: 10px;
	padding: 15px;
`;

const ModalHeader = styled.Text`
	font-size: 20px;
	color: white;
	font-family: KhulaRegular;
`;

const ModalTextContainer = styled.View`
	display: flex;
	flex-grow: 3;
	flex-direction: column;
	justify-content: center;
	padding: 20px 0px;
`;

const ModalText = styled.Text`
	font-size: 16px;
	color: white;
	display: flex;
	font-family: KhulaLight;
`;

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
	removeLastModifier,
	addModifiersMode,
	setAddModifiersMode,
	data
}) => {
	const [ filterText, setFilterText ] = useState('');
	const [ filteredModifiers, setFilteredModifiers ] = useState(fuzzySearch('', [ ...data ]));
	const [ modalVisible, setModalVisible ] = useState(false);

	useEffect(() => clearSearch(), [ addModifiersMode ]);

	const clearSearch = () => {
		setFilterText('');
		setFilteredModifiers(fuzzySearch('', [ ...data ]));
	};

	const handlePress = (changeValue) => {
		const newValue = (parseFloat(weight) + changeValue).toFixed(1);
		updateWeight(newValue);
	};

	const handleSearchInputChange = (text) => {
		if (text.toLowerCase() === 'respawn') {
			respawnOnboarding();
			Keyboard.dismiss();
			return;
		}

		if (text.toLowerCase() === 'purge all data') {
			removeAllUserModifiers();
			setFilterText('');
			setAddModifiersMode(false);
			Keyboard.dismiss();
			return;
		}

		if (text.toLowerCase() === 'remove last') {
			removeLastModifier();
			setFilterText('');
			setAddModifiersMode(false);
			Keyboard.dismiss();
			return;
		}

		setFilterText(text);
		setFilteredModifiers(fuzzySearch(text, data));
	};

	if (!data.length) {
		return (
			<Wrapper>
				<WeightLabel>Loading...</WeightLabel>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<Modal animationType="slide" transparent={true} visible={modalVisible}>
				<ModalWrapper>
					<ModalBody>
						<ModalHeader>Type-in commands</ModalHeader>
						<ModalTextContainer>
							<ModalText>Remove last – removes last lifespan modifier.</ModalText>
							<ModalText>Purge all data – removes all added lifespan modifiers.</ModalText>
							<ModalText>
								Respawn – restarts onboarding without deleting all lifespan modifiers.
							</ModalText>
						</ModalTextContainer>
						<ConfirmButton label="OK" onPress={() => setModalVisible(false)} color="#8f8f8f" />
					</ModalBody>
				</ModalWrapper>
			</Modal>
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
			<Search>
				<SearchInput
					placeholder={addModifiersMode ? `Try '${data[Math.floor(Math.random() * data.length)].text}'` : ''}
					value={filterText}
					onChangeText={(text) => handleSearchInputChange(text)}
					returnKeyType="done"
				/>
				{filterText.length ? (
					<ClearButton onPress={clearSearch}>
						<AntDesign name="close" size={24} color="#8f8f8f" />
					</ClearButton>
				) : (
					<ClearButton onPress={() => setModalVisible(true)}>
						<AntDesign name="questioncircleo" size={24} color="#8f8f8f" />
					</ClearButton>
				)}
			</Search>
			<FlatList
				keyboardShouldPersistTaps={'handled'}
				ItemSeparatorComponent={() => <Separator />}
				data={filteredModifiers}
				renderItem={({ item, index }) => rowRenderer(item, index, addLifespanModifier)}
				keyExtractor={(item, index) => item.text + index}
				bounces={false}
				ListEmptyComponent={<Feedback />}
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
	removeAllUserModifiers: () => dispatch(removeAllUserModifiers()),
	removeLastModifier: () => dispatch(removeLastModifier())
});

const AddModifiersListContainer = connect(mapStateToProps, mapDispatchToProps)(AddModifiersList);

export default AddModifiersListContainer;
