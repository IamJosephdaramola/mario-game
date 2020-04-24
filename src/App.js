import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Board from './components/Board';
import Score from './components/Score';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			horizontalBlocks: 0,
			verticalBlocks: 0,
			totalTime: 0,
			steps: 0
		};
	}

	setBlocks = (horizontal, vertical) => {
		this.setState({
			horizontalBlocks: horizontal,
			verticalBlocks: vertical
		});
	};

	setTotalTime = (startTime, steps) => {
		const totalTime = new Date().getTime() - startTime;
		this.setState({ totalTime, steps });
	};

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={this.renderHome} />
					<Route exact path='/board' component={this.renderBoard} />
					<Route exact path='/score' component={this.renderScore} />
				</Switch>
			</Router>
		);
	}

	renderHome = () => <Home setBlocks={this.setBlocks} {...this.state} />;
	renderBoard = () => <Board setTotalTime={this.setTotalTime} {...this.state} />;
	renderScore = () => <Score {...this.state} />;
}

export default App;
