import { Component, createSignal } from 'solid-js';
import Button from '@/components/shared/button';
import FormGroup from '@/components/shared/form-group';
import FormInput from '@/components/shared/form-input';
import FormLabel from '@/components/shared/form-label';
import FormTextArea from '@/components/shared/form-textarea';
import toast, { Toaster } from 'solid-toast';

import '@/scss/components/contact/contact-form.scss';
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

const ContactForm: Component<ContactFormProps> = () => {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [message, setMessage] = createSignal('');
  const [isLoading, setIsLoading] = createSignal(false);
  const [fieldErrors, setFieldErrors] = createSignal<ContactFormFieldErrors>();

  const notify = (type: 'success' | 'error', message?: string) => {
    if (type === 'success') {
      toast.success(message, {
        position: 'top-center',
        className: 'contact-form__toast',
        duration: 3000,
      });
    } else {
      toast.error('Could not send the message. Try later', {
        position: 'top-center',
        className: 'contact-form__toast',
        duration: 3000,
      });
    }
  };

  const submitToWeb3Forms = async () => {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name(),
          email: email(),
          message: message(),
          access_key: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: 'Message from your portfolio website',
        }),
      });

      const json = await res.json();

      if (json.message) {
        notify('success', json.message);
      }
    } catch (err) {
      notify('error');
    }
  };

  const submitForm = async (
    e: Event & {
      submitter: HTMLElement;
    } & {
      currentTarget: HTMLFormElement;
      target: Element;
    }
  ) => {
    e.preventDefault();

    setIsLoading(true);
    setFieldErrors({});

    const formData = {
      name: name(),
      email: email(),
      message: message(),
    };

    const result = contactFormSchema.safeParse(formData);

    if (result.success) {
      await submitToWeb3Forms();
    } else {
      const errors = result.error.formErrors.fieldErrors;
      setFieldErrors(errors);
    }

    setIsLoading(false);

    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <>
      <form class="contact-form" novalidate onSubmit={submitForm}>
        <FormGroup>
          <FormLabel for="name" required>
            Name
          </FormLabel>
          <FormInput
            type="text"
            id="name"
            errorMessage={fieldErrors()?.name?.[0]}
            required
            value={name()}
            onInput={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel for="email" required>
            Email
          </FormLabel>
          <FormInput
            type="email"
            id="email"
            errorMessage={fieldErrors()?.email?.[0]}
            required
            value={email()}
            onInput={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel for="message" required>
            Message
          </FormLabel>
          <FormTextArea
            id="message"
            rows={5}
            errorMessage={fieldErrors()?.message?.[0]}
            required
            value={message()}
            onInput={(e) => {
              setMessage(e.currentTarget.value);
            }}
          />
        </FormGroup>
        <Button
          variant="secondary-outline"
          isLoading={isLoading()}
          type="submit"
        >
          Submit
        </Button>
      </form>

      <Toaster />
    </>
  );
};

export default ContactForm;
