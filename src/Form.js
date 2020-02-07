import React, { Fragment, useState } from "react";

function Form() {
	const [username, setUsername] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [complete, setComplete] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		if (username) {
			setComplete(true);
		}
	}

	const onUsernameChange = (e) => {
		setUsername(e.target.value)
	}

	if (complete) {
		return (
			<h1>Complete</h1>
		)
	}

	return (
		<Fragment>
			<h1>Demo Form</h1>
			<form name="test" onSubmit={onSubmit}>
				<div>
					<input
						id="test_username"
						name="username"
						placeholder="Username"
						value={username}
						onChange={onUsernameChange}
					/>
					{submitted && !username && <div>Username required</div>}
				</div>
				<div>
					<button type="submit">
						Submit
					</button>
				</div>
			</form>
		</Fragment>
	);
}

export default Form;
