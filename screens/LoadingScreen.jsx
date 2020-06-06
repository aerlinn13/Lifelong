import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

const LoadingScreen = ({ navigation, onboardingFinished }) => {
  useEffect(() => {
    if (onboardingFinished) {
      navigation.navigate('Dashboard');
    } else {
      navigation.navigate('Onboarding');
    }
  }, []);

  return (
    <SafeAreaView>
      <StyledView>
        <StyledText>Loading Screen</StyledText>
      </StyledView>
    </SafeAreaView>
    ); 
}

const mapStateToProps = state => ({
  onboardingFinished: state.get('onboardingFinished')
});

const LoadingScreenContainer = connect(mapStateToProps)(LoadingScreen);

export default LoadingScreenContainer;