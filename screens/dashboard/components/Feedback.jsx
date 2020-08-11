import React from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import { ConfirmButton } from '../onboarding/layout';

const Wrapper = styled.View`
	padding: 15px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Header = styled.Text`
	font-family: KhulaRegular;
	font-size: 20px;
`;

const Text = styled.Text`
	font-family: KhulaRegular;
	font-size: 16px;
	align-self: center;
`;

const Feedback = () => {
	return (
		<Wrapper>
			<Header>Nothing found.</Header>
			<Text>Want a new one? Send me a request.</Text>
			<ConfirmButton
				wide
				label="danil@hey.com"
				onPress={() => Linking.openURL('mailto:danil@hey.com?subject=New lifespan modifier request')}
			/>
		</Wrapper>
	);
};

export default Feedback;
