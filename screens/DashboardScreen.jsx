import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import moment from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledView = styled.View`
	background-color: white;
	height: 100%;
	width: 100%;
`;

const Label = styled.Text`
	color: black;
	font-family: KhulaRegular;
	text-align: center;
`;

const DashboardScreen = ({ weight, dob, bmi, lifespan }) => {
	const death = moment(dob, 'dd.mm.yyyy').add(lifespan, 'minutes');
	const duration = moment.duration(death.diff(moment()));

	const calculateTimeToLive = () => {
		const years = duration.years();
		const months = duration.months();
		const days = duration.days();
		const hours = duration.hours();
		const minutes = duration.minutes();
		const seconds = duration.seconds();
		return `Left ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;
	};

	return (
		<SafeAreaView>
			<StyledView>
				{/* <Label>{`Weight ${weight} kg`}</Label>
				<Label>{`BMI ${bmi}`}</Label> */}
				<Label>{`Last day ${death.format('DD MMMM, YYYY')}`}</Label>
				<Label>{calculateTimeToLive()}</Label>
			</StyledView>
		</SafeAreaView>
	);
};

const mapStateToProps = (state) => ({
	weight: state.get('weight'),
	dob: state.get('dob'),
	bmi: state.get('bmi'),
	lifespan: state.get('geneticAgeAtDeath') - state.get('negativeBMIInfluence')
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const DashboardScreenContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

export default DashboardScreenContainer;
