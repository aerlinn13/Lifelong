import React, { useState, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

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
	font-size: 16px;
	font-family: KhulaRegular;
	flex-grow: 2;
`;

const Label = styled.Text`
	color: white;
	font-size: 16px;
	font-family: KhulaRegular;
`;

const AddModifierButton = styled(TouchableOpacity)`
	background-color: ${(props) => (props.isAdded ? '#c9c9c9' : props.isPositive ? '#7ED321' : '#D0021B')};
	height: 40px;
	min-width: 70px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const RecurButton = styled(TouchableOpacity)`
	margin-right: 15px;
`;

const AddModifierCell = ({ item, index, addLifespanModifier, navigation }) => {
	const [ isAdded, setAdded ] = useState(false);
	const animation = useRef(new Animated.Value(0)).current;

	const handlePress = () => {
		const direction = item.type === '+' ? 'timeWon' : 'timeLost';
		addLifespanModifier(direction, item.id, item.minutes);
		Animated.sequence([
			Animated.timing(animation, {
				toValue: 1,
				duration: 200,
				useNativeDriver: true
			}),
			Animated.timing(animation, {
				toValue: 0,
				duration: 200,
				useNativeDriver: true
			})
		]).start();
	};
	return (
		<Cell key={'add' + index + item.text}>
			<Header>{item.text}</Header>
			<RecurButton onPress={() => navigation.replace('Recurring')}>
				<AntDesign name="reload1" size={22} color="black" />
			</RecurButton>
			<Animated.View
				style={[
					{
						transform: [
							{
								translateY: animation.interpolate({
									inputRange: [ 0, 1 ],
									outputRange: [ 0, -5 ]
								})
							}
						]
					}
				]}
			>
				<AddModifierButton
					isPositive={item.type === '+'}
					onPress={handlePress}
					isAdded={isAdded}
					disabled={isAdded}
				>
					<Label>{item.value}</Label>
				</AddModifierButton>
			</Animated.View>
		</Cell>
	);
};

export default AddModifierCell;
