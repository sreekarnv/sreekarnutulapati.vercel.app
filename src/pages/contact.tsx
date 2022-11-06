import type { NextPage } from 'next';
import classes from '@/scss/pages/contact/contact.module.scss';
import Link from 'next/link';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import TextArea from '@/components/ui/text-area';
import Button from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

const contact: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.4 } },
};

const contactChild: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Please provide a valid email'),
  message: Yup.string().required('Message is required').min(10),
}).required();

const ContactPage: NextPage = ({}) => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { submit: onSubmit } = useWeb3Forms({
    access_key: process.env.NEXT_PUBLIC_WEB_THREE_FORM_API_KEY as string,
    settings: {
      from_name: 'Your Portfolio Website',
      subject: 'New Message',
    },
    onSuccess: () => {
      toast.success('Message sent successfully ☺️', {
        position: toast.POSITION.TOP_CENTER,
      });
      reset();
    },
    onError: () => {
      toast.error('Could not send message. Please try later 😔', {
        position: toast.POSITION.TOP_CENTER,
      });
      reset();
    },
  });

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
      <motion.div
        variants={contact}
        initial="hidden"
        animate="show"
        className={classes.page}
      >
        <motion.div className={classes.content} variants={contactChild}>
          <h1>Get in touch</h1>
          <p>
            Fill out the form below and I&apos;ll get back to you as soon as I
            can.
          </p>
          <p>
            Alternatively, you can email me at{' '}
            <Link href="mailto:sreekarnv1@gmail.com" target="_blank">
              sreekarnv1@gmail.com
            </Link>
          </p>
          <p>
            Or you can find me on{' '}
            <Link
              href="https://www.linkedin.com/in/sreekar-venkata-nutulapati-63672120a/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          variants={contactChild}
          className={classes.form}
          noValidate
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              required
              minLength={2}
              {...register('name', { required: true, minLength: 2 })}
              errorMessage={errors.name?.message as string}
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              required
              {...register('email', { required: true })}
              errorMessage={errors.email?.message as string}
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              rows={5}
              required
              minLength={10}
              {...register('message', { required: true, minLength: 10 })}
              errorMessage={errors.message?.message as string}
            />
          </div>
          <Button
            disabled={isSubmitting}
            isLoading={isSubmitting}
            type="submit"
            variant="secondary-outline"
            size="large"
          >
            Submit
          </Button>
        </motion.form>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default ContactPage;
