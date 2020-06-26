import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

const Wrapper = styled.View`
	height: 120px;
	width: 90%;
	background-color: black;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5%;
`;

const Label = styled.Text`
	color: white;
	font-size: 40px;
	font-family: KhulaLight;
	margin-top: 35px;
	position: absolute;
`;

const MiniLabel = styled(Label)`
    font-size: 16px;
    font-family: KhulaRegular;
    position: relative;
    bottom: -65px;
    margin: 0px 15px;
`;

const MiniLabels = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Separator = styled.View`flex-grow: 2;`;

const calculateTimeToLive = (deathTime) => {
	const duration = moment.duration(deathTime.diff(moment()));
	const years = duration.years();
	const months = duration.months();
	const days = duration.days();
	const hours = duration.hours();
	const minutes = duration.minutes();
	const seconds = duration.seconds();
	return `${years}.${months}.${days}.${hours}.${minutes}.${seconds}`;
};

class DeathCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeToLive: calculateTimeToLive(this.props.death)
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				timeToLive: calculateTimeToLive(this.props.death)
			});
		}, 1000);
	}

	componentWillUnmount() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}

	render() {
		return (
			<Wrapper>
				<Label>{this.state.timeToLive}</Label>
				<MiniLabels>
					<MiniLabel>{`${this.props.lifespan / 525600} years old`}</MiniLabel>
					<Separator />
					<MiniLabel>{this.props.death.format('DD MMMM, YYYY')}</MiniLabel>
				</MiniLabels>
			</Wrapper>
		);
	}
}

export default DeathCounter;
