import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
	View,
	YellowBox
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import OptionBar from './src/components/OptionBar';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Remote debugger is in a background tab which may cause apps to perform slowly',
])

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			timeRemaining: this.getTimerAmount(),
			playing: false
		}
	}

  componentDidMount() {
    setInterval(this.tick, 1000);
	}

	getTimerAmount = () => {
		return 100;
	}
	
	toggleStatus = () => {
		this.setState((prevState, props) => {
			return {
				timeRemaining: this.getTimerAmount(), 
				playing: !prevState.playing
			};
		});
	}

  tick = () => {
		if (this.state.playing === true) {
			this.setState(prevState => {
				return {timeRemaining: prevState.timeRemaining - 1};
			})
		}
		console.log(this.state.timeRemaining)
  }

  render() {
    return (
				<SafeAreaView 
					style={
						[
							styles.safeArea,
						]
					}
				>
				<View 
					style={
						[
							{ 
								opacity: this.state.timeRemaining / 100,
							}, 
						styles.primaryColor,
						{
							flex: 4,
						}
						]
					}
				/>
					<OptionBar 
						onPressFunction={this.toggleStatus} 
						playing={this.state.playing} 
					/>
				</SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#fafafa',
	},
  container: {
		flex: 1,
	},
	subContainer: {
		flex: 1, 
		alignItems: 'center',
		justifyContent: 'center',

	},
	primaryColor: {
		backgroundColor: "#5856d6",
	},
	mainBackgroundColor: {
		backgroundColor: "#fafafa",
	}
});
