import React, { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
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
	background-color: white;
	display: ${(props) => (props.disabled ? 'none' : 'flex')};
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
	useEffect(() => {
		if (!onboardingFinished) {
			navigation.replace('Onboarding');
		}
	}, []);

	const death = moment(dob, 'dd.mm.yyyy').add(lifespan, 'minutes');
	const [ maskDisabled, setMaskDisabled ] = useState(false);
	const [ addModifiersMode, setAddModifiersMode ] = useState(false);

	if (!maskDisabled) {
		setTimeout(() => setMaskDisabled(true), 1000);
	}

	const fadeAnimation = useRef(new Animated.Value(0)).current;
	const scaleAnimation = useRef(new Animated.Value(100)).current;
	React.useEffect(
		() => {
			if (addModifiersMode) {
				Animated.timing(fadeAnimation, {
					toValue: 1,
					duration: 300
				}).start();
				Animated.timing(scaleAnimation, {
					toValue: 1,
					duration: 500
				}).start();
			} else {
				Animated.timing(fadeAnimation, {
					toValue: 0,
					duration: 300
				}).start();

				Animated.timing(scaleAnimation, {
					toValue: 0,
					duration: 500
				}).start();
			}
		},
		[ addModifiersMode ]
	);

	return (
		<React.Fragment>
			<SafeAreaView>
				<StyledView>
					<Animated.View
						style={[
							{
								transform: [
									{
										translateY: scaleAnimation.interpolate({
											inputRange: [ 0, 1 ],
											outputRange: [ 0, -250 ]
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
										translateY: scaleAnimation.interpolate({
											inputRange: [ 0, 1 ],
											outputRange: [ 0, -150 ]
										})
									}
								]
							}
						]}
					>
						<TimeIndicators>
							<TimeIndicator time={timeWon} label="won" color="#7ED321" />
							<TimeIndicator time={timeLost} label="lost" color="#D0021B" />
						</TimeIndicators>
						{addModifiersMode ? <AddModifiersList /> : <ModifiersFeed userModifiers={lifespanModifiers} />}
					</Animated.View>
					<ReportButton
						addModifiersMode={addModifiersMode}
						onPressReportButton={() => setAddModifiersMode(!addModifiersMode)}
					/>
				</StyledView>
			</SafeAreaView>
			<Mask disabled={maskDisabled} />
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
