import type { Component } from 'solid-js';
import Button from '../shared/button';
import FormGroup from '../shared/form-group';
import FormInput from '../shared/form-input';
import FormLabel from '../shared/form-label';
import FormTextArea from '../shared/form-textarea';

import '../../scss/components/contact/contact-form.scss';

interface ContactFormProps {}

const ContactForm: Component<ContactFormProps> = ({}) => {
	return (
		<>
			<form class='contact-form' novalidate>
				<FormGroup>
					<FormLabel for='name' required>
						Name
					</FormLabel>
					<FormInput type='text' id='name' required />
				</FormGroup>
				<FormGroup>
					<FormLabel for='email' required>
						Email
					</FormLabel>
					<FormInput type='email' id='email' required />
				</FormGroup>
				<FormGroup>
					<FormLabel for='message' required>
						Message
					</FormLabel>
					<FormTextArea id='message' rows={5} required></FormTextArea>
				</FormGroup>
				<Button type='submit'>Submit</Button>
			</form>
		</>
	);
};

export default ContactForm;
