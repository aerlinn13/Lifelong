import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

const RecurringModifierScreen = () => {
	return <SafeAreaView style={{ backgroundColor: 'white' }} />;
};

const mapStateToProps = (state) => ({
	weight: state.weight
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const RecurringModifierScreenContainer = connect(mapStateToProps, mapDispatchToProps)(RecurringModifierScreen);

export default RecurringModifierScreenContainer;
