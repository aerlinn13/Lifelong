import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledView = styled.View`
	background-color: white;
	height: 100%;
	width: 100%;
`;

const StyledText = styled.Text`color: palevioletred;`;

const DashboardScreen = ({ state }) => {
	console.log(state);
	return (
		<SafeAreaView>
			<StyledView>
				<StyledText>Dashboard Screen</StyledText>
			</StyledView>
		</SafeAreaView>
	);
};

const mapStateToProps = (state) => ({
	state
});

const DashboardScreenContainer = connect(mapStateToProps)(DashboardScreen);

export default DashboardScreenContainer;
