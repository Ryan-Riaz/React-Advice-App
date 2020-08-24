import React, { Component } from "react";
import Axios from "axios";

export class Advice extends Component {
	state = {
		advice: "",
	};

	componentDidMount() {
		this.fetchAdviceHandler();
	}

	fetchAdviceHandler = () => {
		Axios.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip;
				this.setState({
					advice,
				});
			})
			.catch((errors) => {
				console.log(errors);
			});
	};

	render() {
		const { advice } = this.state;
		return (
			<div className="container">
				<div className="card">
					<h2 className="heading">{advice}</h2>
					<button
						className="button"
						onClick={this.fetchAdviceHandler}
					>
						<span>Get More Advice</span>
					</button>
				</div>
			</div>
		);
	}
}

export default Advice;
