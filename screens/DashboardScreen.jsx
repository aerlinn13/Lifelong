import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import moment from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DeathCounter } from '../components/dashboard';

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

	return (
		<SafeAreaView>
			<StyledView>
				<DeathCounter death={death} />
				<Label>{`Last day ${death.format('DD MMMM, YYYY')}`}</Label>
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
