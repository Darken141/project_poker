import React from 'react';

import './form.scss';

const Form = () => {
	return (
		<form>
			<div className="form__row">
				<input type="text" name="name" placeholder="Name" className="input name" />
				<input type="email" name="email" placeholder="E-mail" className="input" />
			</div>
			<div className="form__row">
				<input type="text" name="subject" placeholder="Subject" className="input" />
			</div>
			<textarea className="textarea" placeholder="Type your message here..." rows="5" />

			<button className="cta">Submit</button>
		</form>
	);
};

export default Form;
