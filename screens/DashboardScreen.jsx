import React, { useState } from 'react';
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
	ReportButton
} from '../components/dashboard';

const StyledView = styled.View`
	background-color: #f3f3f3;
	height: 100%;
	width: 100%;
	position: relative;
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

const DashboardScreen = ({ weight, dob, bmi, lifespan }) => {
	const death = moment(dob, 'dd.mm.yyyy').add(lifespan, 'minutes');
	const [ maskDisabled, setMaskDisabled ] = useState(false);

	if (!maskDisabled) {
		setTimeout(() => setMaskDisabled(true), 1000);
	}
	return (
		<React.Fragment>
			<SafeAreaView>
				<StyledView>
					<Indicators>
						<WeightIndicator weight={weight} />
						<BMIIndicator bmi={bmi} />
					</Indicators>
					<DeathCounter death={death} lifespan={lifespan} />
					<TimeIndicators>
						<TimeIndicator time="3y23d11h20m" label="won" color="#7ED321" />
						<TimeIndicator time="45d16h1m" label="lost" color="#D0021B" />
					</TimeIndicators>
					<ModifiersFeed />
					<ReportButton />
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
		lifespan: state.geneticAgeAtDeath - state.negativeBMIInfluence
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

const DashboardScreenContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

export default DashboardScreenContainer;
