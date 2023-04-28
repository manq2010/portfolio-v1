/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import { srConfig } from '../utils/config';
import sr from '../utils/sr';
import mixins from '../styles/mixins';

const ContactWrapper = styled.section`
${mixins.flexCenter}
flex-direction: column;
// margin: 0 auto;


@media (min-width: 768px) {
  // margin: 0 auto 100px;
}

.overline {
  display: block;
  margin-bottom: 20px;
  color: var(--secondary);
  font-family: var(--font-mono-family);
  font-size: var(--fs-m);
  font-weight: 400;

  &:before {
    bottom: 0;
    font-size: var(--fs-s);
  }

  &:after {
    display: none;
  }
}

.title {
  font-size: clamp(40px, 5vw, 60px);
}

form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;

    label {
      margin-top: 2rem;
      font-family: var(--font-mono-family);
      font-size: var(--fs-m);
      font-weight: 400;
      display: flex;
      flex-direction: column;
      color: var(--secondary);
      font-family: var(--font-mono-family);
    }

    input,
    textarea {
      padding: 10px;
      font-size: var(--fs-m);
      background-color: var(--tertiary-lightest);
      border-radius: var(--border-radius);
      color: var(--primary);
      margin-top: 2px;
    }

    textarea {
      min-height: 50px;
    }

    button[type='submit'] {
      ${mixins.smallButton}
      margin-top: 20px;
      align-self: flex-end;
    }

    .message {
      margin-top: 20px;
      align-content: center;
    }
  }
`;

const Contact = () => {
  const [state, handleSubmit] = useForm('xvoyqvkr');
  const { errors } = state;
  const [emailStatus, setEmailStatus] = useState('');

  const revealContainer = React.useRef(100);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setEmailStatus('sending');
    const { error } = await handleSubmit(event);
    if (error) {
      setTimeout(() => {
        setEmailStatus('error');
      }, 2000);
      setTimeout(() => {
        setEmailStatus('done');
      }, 3000);
    } else {
      setTimeout(() => {
        setEmailStatus('sent');
      }, 2000);
      setTimeout(() => {
        setEmailStatus('done');
      }, 3000);
    }
    event.target.reset();
  };

  React.useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <ContactWrapper id="contacts" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>
      <h2 className="title">Get In Touch</h2>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="full-name">
          <span>Full Name</span>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required
          />
        </label>
        <ValidationError prefix="Text" field="text" errors={errors} />

        <label htmlFor="email">
          <span>Your Email:</span>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="example@gmail.com"
          />
        </label>
        <ValidationError prefix="Email" field="email" errors={errors} />

        <label htmlFor="message">
          <span>Message:</span>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Write your message here..."
          />
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={errors}
        />

        {emailStatus === 'sending' && (
        <span className="message">Sending message...</span>
        )}
        {emailStatus === 'sent' && (
          <span className="message">Message sent successfully!</span>
        )}
        {emailStatus === 'error' && (
          <span className="message">Error sending message. Please try again later.</span>
        )}
        {emailStatus === 'done' && (
          <span className="message" />
        )}

        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </ContactWrapper>
  );
};

export default Contact;
