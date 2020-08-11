import React, { useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import timeCalculator from '../../../calculators/timeCalculator';

const Wrapper = styled.View`
	width: 47%;
	height: 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: white;
	position: relative;
	padding: 15px 5px;
`;

const Header = styled.Text`
	color: black;
	font-size: 20px;
	font-family: KhulaRegular;
`;

const Text = styled.Text`
	color: black;
	font-size: 16px;
	font-family: KhulaLight;
`;

const Sign = styled.View`
	border-radius: 50px;
	background-color: ${(props) => props.color};
	width: 10px;
	height: 10px;
	position: absolute;
	top: -10px;
	left: 1px;
`;

const TimeIndicator = ({ time, color }) => {
	const animation = useRef(new Animated.Value(0)).current;
	React.useEffect(
		() => {
			Animated.sequence([
				Animated.timing(animation, {
					toValue: 1,
					duration: 400,
					useNativeDriver: true
				}),
				Animated.timing(animation, {
					toValue: 0,
					duration: 400,
					useNativeDriver: true
				})
			]).start();
		},
		[ time ]
	);
	return (
		<Wrapper>
			<Animated.View
				style={[
					{
						position: 'relative'
					},
					{
						width: '100%'
					},
					{
						transform: [
							{
								translateY: animation.interpolate({
									inputRange: [ 0, 1 ],
									outputRange: [ 0, 40 ]
								})
							}
						]
					}
				]}
			>
				<Sign color={color} />
			</Animated.View>
			<Header>{timeCalculator(time)}</Header>
		</Wrapper>
	);
};

export default TimeIndicator;
