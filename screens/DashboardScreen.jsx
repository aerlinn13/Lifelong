import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledView = styled.View`
  background-color: papayawhip;
  height: 100%;
  width: 100%;
`

const StyledText = styled.Text`
  color: palevioletred;
`

const DashboardScreen = () => (
    <SafeAreaView>
      <StyledView>
        <StyledText>Hello World!</StyledText>
      </StyledView>
    </SafeAreaView>
    );

export default DashboardScreen;