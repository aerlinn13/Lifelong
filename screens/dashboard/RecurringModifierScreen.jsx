import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { finishOnboarding, updatePersonalInfo, updateRelativeInfo } from '../../state/actions';

const RecurringModifierScreen = () => {
	return <SafeAreaView style={{ backgroundColor: 'black' }} />;
};

const mapStateToProps = (state) => ({
	weight: state.weight
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const RecurringModifierScreenContainer = connect(mapStateToProps, mapDispatchToProps)(RecurringModifierScreen);

export default RecurringModifierScreenContainer;
