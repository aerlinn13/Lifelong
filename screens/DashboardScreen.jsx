import React, { useState, useEffect, useRef } from 'react';
import { Animated, Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import moment from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
	DeathCounter,
	WeightIndicator,
	BMIIndicator,
	TimeIndicator,
	ModifiersFeed,
	ReportButton,
	AddModifiersList
} from '../components/dashboard';

const StyledView = styled.View`
	background-color: #f3f3f3;
	height: 100%;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
`;

const Mask = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #f3f3f3;
`;

const Indicators = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const TimeIndicators = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0px 20px;
`;

const Lists = styled.View`
	display: flex;
	flex-direction: ${() => (Platform.OS === 'ios' ? 'row' : 'column')};
	justify-content: flex-start;
	align-items: flex-start;
`;

const DashboardScreen = ({
	navigation,
	weight,
	dob,
	bmi,
	lifespan,
	timeWon,
	timeLost,
	onboardingFinished,
	lifespanModifiers
}) => {
	const death = moment(dob, 'dd.mm.yyyy').add(lifespan, 'minutes');
	const [ addModifiersMode, setAddModifiersMode ] = useState(false);
	const [ maskDisabled, setMaskDisabled ] = useState(false);
	const animation = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		setTimeout(() => setMaskDisabled(true), 400);
	}, []);

	useEffect(
		() => {
			if (!onboardingFinished) {
				navigation.replace('Onboarding');
			}
		},
		[ onboardingFinished ]
	);

	useEffect(
		() => {
			if (addModifiersMode) {
				Animated.timing(animation, {
					toValue: 1,
					duration: 400
				}).start();
			} else {
				Animated.timing(animation, {
					toValue: 0,
					duration: 400
				}).start();
			}
		},
		[ addModifiersMode ]
	);

	const xRange = Platform.OS === 'ios' ? [ 0, -Dimensions.get('window').width ] : [ 0, 0 ];
	const yRange = Platform.OS === 'ios' ? [ 0, -170 ] : [ 0, -170 ];

	return (
		<React.Fragment>
			<SafeAreaView>
				<StyledView>
					<Animated.View
						style={[
							{
								transform: [
									{
										translateY: animation.interpolate({
											inputRange: [ 0, 1 ],
											outputRange: [ 0, -500 ]
										})
									}
								]
							}
						]}
					>
						<Indicators>
							<WeightIndicator weight={weight} />
							<BMIIndicator bmi={bmi} />
						</Indicators>
						<DeathCounter death={death} lifespan={lifespan} />
					</Animated.View>
					<Animated.View
						style={[
							{
								transform: [
									{
										translateY: animation.interpolate({
											inputRange: [ 0, 1 ],
											outputRange: [ 0, -170 ]
										})
									}
								]
							}
						]}
					>
						<TimeIndicators>
							<TimeIndicator time={timeWon} color="#7ED321" />
							<TimeIndicator time={timeLost} color="#D0021B" />
						</TimeIndicators>
					</Animated.View>
					{Platform.OS === 'ios' ? (
						<Animated.View
							style={[
								{
									transform: [
										{
											translateX: animation.interpolate({
												inputRange: [ 0, 1 ],
												outputRange: xRange
											})
										},
										{
											translateY: animation.interpolate({
												inputRange: [ 0, 1 ],
												outputRange: yRange
											})
										}
									]
								}
							]}
						>
							<Lists>
								<ModifiersFeed userModifiers={lifespanModifiers} />
								<AddModifiersList
									addModifiersMode={addModifiersMode}
									setAddModifiersMode={setAddModifiersMode}
									timeWon={timeWon}
									timeLost={timeLost}
								/>
							</Lists>
						</Animated.View>
					) : addModifiersMode ? (
						<Animated.View
							style={[
								{
									transform: [
										{
											translateY: animation.interpolate({
												inputRange: [ 0, 1 ],
												outputRange: yRange
											})
										}
									]
								}
							]}
						>
							<AddModifiersList
								addModifiersMode={addModifiersMode}
								setAddModifiersMode={setAddModifiersMode}
								timeWon={timeWon}
								timeLost={timeLost}
							/>
						</Animated.View>
					) : (
						<Animated.View
							style={[
								{
									transform: [
										{
											translateY: animation.interpolate({
												inputRange: [ 0, 1 ],
												outputRange: yRange
											})
										}
									]
								}
							]}
						>
							<ModifiersFeed userModifiers={lifespanModifiers} />
						</Animated.View>
					)}
				</StyledView>
				<ReportButton
					addModifiersMode={addModifiersMode}
					onPressReportButton={() => setAddModifiersMode(!addModifiersMode)}
				/>
			</SafeAreaView>
			{maskDisabled ? null : <Mask />}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		weight: state.weight,
		dob: state.dob,
		bmi: state.bmi,
		lifespan: state.geneticAgeAtDeath - state.negativeBMIInfluence + state.timeWon - state.timeLost,
		timeWon: state.timeWon,
		timeLost: state.timeLost,
		onboardingFinished: state.onboardingFinished,
		lifespanModifiers: state.lifespanModifiers
	};
};

const DashboardScreenContainer = connect(mapStateToProps)(DashboardScreen);

export default DashboardScreenContainer;
