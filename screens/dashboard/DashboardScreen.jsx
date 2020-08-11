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
} from './components';
import { getModifiersData } from '../../helpers/getModifiersData';
import { setDataVersion, downloadData, setWhatsNew } from './state/actions';

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
	lifespanModifiers,
	data,
	version,
	setDataVersion,
	downloadData,
	setWhatsNew,
	newData
}) => {
	const death = moment(dob, 'dd.mm.yyyy').add(lifespan, 'minutes');
	const [ addModifiersMode, setAddModifiersMode ] = useState(false);
	const [ maskDisabled, setMaskDisabled ] = useState(false);
	const animation = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		setTimeout(() => setMaskDisabled(true), 400);
		getModifiersData(data, version, setDataVersion, downloadData, setWhatsNew);
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
				getModifiersData(data, version, setDataVersion, downloadData, setWhatsNew);
				Animated.timing(animation, {
					toValue: 1,
					duration: 400,
					useNativeDriver: true
				}).start();
			} else {
				Animated.timing(animation, {
					toValue: 0,
					duration: 400,
					useNativeDriver: true
				}).start();
			}
		},
		[ addModifiersMode ]
	);

	const xRange = Platform.OS === 'ios' ? [ 0, -Dimensions.get('window').width ] : [ 0, 0 ];
	const yRange = [ 0, -170 ];
	console.log(newData);
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
								<ModifiersFeed
									addModifiersMode={addModifiersMode}
									userModifiers={lifespanModifiers}
									data={data}
								/>
								<AddModifiersList
									addModifiersMode={addModifiersMode}
									setAddModifiersMode={setAddModifiersMode}
									timeWon={timeWon}
									timeLost={timeLost}
									data={data}
								/>
							</Lists>
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
							<ModifiersFeed
								addModifiersMode={addModifiersMode}
								userModifiers={lifespanModifiers}
								data={data}
							/>
							<AddModifiersList
								addModifiersMode={addModifiersMode}
								setAddModifiersMode={setAddModifiersMode}
								timeWon={timeWon}
								timeLost={timeLost}
								data={data}
							/>
						</Animated.View>
					)}
				</StyledView>
				<ReportButton
					addModifiersMode={addModifiersMode}
					onPressReportButton={() => setAddModifiersMode(!addModifiersMode)}
					disabled={!data.length}
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
		lifespanModifiers: state.lifespanModifiers,
		data: state.data,
		version: state.version,
		newData: state.newData
	};
};

const mapDispatchToProps = (dispatch) => ({
	setDataVersion: (version) => dispatch(setDataVersion(version)),
	downloadData: (data) => dispatch(downloadData(data)),
	setWhatsNew: (data) => dispatch(setWhatsNew(data))
});

const DashboardScreenContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

export default DashboardScreenContainer;
