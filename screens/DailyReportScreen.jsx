import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

const DailyReportScreen = () => (
    <SafeAreaView>
      <StyledView>
        <StyledText>Hello World!</StyledText>
      </StyledView>
    </SafeAreaView>
    ); 

export default DailyReportScreen;