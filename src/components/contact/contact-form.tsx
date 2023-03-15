import { Component, createSignal } from 'solid-js';
import Button from '../shared/button';
import FormGroup from '../shared/form-group';
import FormInput from '../shared/form-input';
import FormLabel from '../shared/form-label';
import FormTextArea from '../shared/form-textarea';
import toast, { Toaster } from 'solid-toast';

import '../../scss/components/contact/contact-form.scss';
import { z } from 'zod';

interface ContactFormProps {}

const contactFormSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(1, { message: 'Name is required' })
		.max(100),
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email is invalid' })
		.min(1)
		.max(100),
	message: z
		.string({ required_error: 'Message is required' })
		.min(10, { message: 'Message must be atleast 10 characters' })
		.max(100),
});

interface ContactFormFieldErrors {
	name?: string[] | undefined;
	email?: string[] | undefined;
	message?: string[] | undefined;
}

const ContactForm: Component<ContactFormProps> = ({}) => {
	const [name, setName] = createSignal('');
	const [email, setEmail] = createSignal('');
	const [message, setMessage] = createSignal('');
	const [fieldErrors, setFieldErrors] = createSignal<ContactFormFieldErrors>();

	const notify = () =>
		toast.success('Submitted Successfully', {
			position: 'top-center',
			className: 'contact-form__toast',
			duration: 3000,
		});

	const submitForm = (
		e: Event & {
			submitter: HTMLElement;
		} & {
			currentTarget: HTMLFormElement;
			target: Element;
		}
	) => {
		e.preventDefault();
		setFieldErrors({});

		const formData = {
			name: name(),
			email: email(),
			message: message(),
		};

		const result = contactFormSchema.safeParse(formData);

		console.log(result);

		if (result.success) {
			console.log('Form data is valid');
			notify();
		} else {
			const errors = result.error.formErrors.fieldErrors;
			setFieldErrors(errors);
		}

		setEmail('');
		setName('');
		setMessage('');
	};

	return (
		<>
			<form class='contact-form' novalidate onSubmit={submitForm}>
				<FormGroup>
					<FormLabel for='name' required>
						Name
					</FormLabel>
					<FormInput
						type='text'
						id='name'
						errorMessage={fieldErrors()?.name?.[0]}
						required
						value={name()}
						onInput={(e) => {
							setName(e.currentTarget.value);
						}}
					/>
				</FormGroup>
				<FormGroup>
					<FormLabel for='email' required>
						Email
					</FormLabel>
					<FormInput
						type='email'
						id='email'
						errorMessage={fieldErrors()?.email?.[0]}
						required
						value={email()}
						onInput={(e) => {
							setEmail(e.currentTarget.value);
						}}
					/>
				</FormGroup>
				<FormGroup>
					<FormLabel for='message' required>
						Message
					</FormLabel>
					<FormTextArea
						id='message'
						rows={5}
						errorMessage={fieldErrors()?.message?.[0]}
						required
						value={message()}
						onInput={(e) => {
							setMessage(e.currentTarget.value);
						}}></FormTextArea>
				</FormGroup>
				<Button type='submit'>Submit</Button>
			</form>

			<Toaster />
		</>
	);
};

export default ContactForm;
