import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import lifespanModifiers from '../../data/lifespanModifiers';

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

const rowRenderer = (item, index) => {
	if (item.type !== 'LAST') {
		return (
			<Cell key={'feed' + index}>
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

const getData = (userModifiers) => {
	const modifiers = userModifiers.map((id) => lifespanModifiers[id]);

	if (modifiers.length > 5) {
		modifiers.length = 5;
		return [ ...modifiers, { type: 'LAST', text: 'Showing last 5 records' } ];
	}
	return [ ...modifiers, { type: 'LAST', text: `Showing last ${modifiers.length} records` } ];
};

const ModifiersFeed = ({ userModifiers }) => {
	return (
		<Wrapper>
			<FlatList
				ItemSeparatorComponent={() => <Separator />}
				data={getData(userModifiers)}
				style={{ flexGrow: 2 }}
				renderItem={({ item, index }) => rowRenderer(item, index)}
				keyExtractor={(item, index) => item.text + index}
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

export default ModifiersFeed;
