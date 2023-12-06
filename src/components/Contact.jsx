import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
	const [state, handleSubmit] = useForm("xayggjkn");
  if (state.succeeded) {
      return <p>Thanks for getting in contact!</p>;
  }

    return (
			<div class="container py-5">
				<div class="col-md-8 m-auto">
					<div class="p-5 bg-body-tertiary border rounded-3">
					<h2>Add borders</h2>
					<p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
					<form onSubmit={handleSubmit}>
						<label htmlFor="email">
							Email Address
						</label>
						<input
							id="email"
							type="email" 
							name="email"
						/>
						<ValidationError 
							prefix="Email" 
							field="email"
							errors={state.errors}
						/>
						<textarea
							id="message"
							name="message"
						/>
						<ValidationError 
							prefix="Message" 
							field="message"
							errors={state.errors}
						/>
						<button type="submit" disabled={state.submitting}>
							Submit
						</button>
					</form>
					</div>
				</div>
			</div>
    );

}

export default Contact;