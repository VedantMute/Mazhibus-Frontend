import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ConfirmEmailSend = ({ name, emailid, message }) => {
  const form = useRef();

  useEffect(() => {
    const sendEmail = () => {
      emailjs
        .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2, form.current, import.meta.env.VITE_EMAILJS_USER_ID)
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    // Trigger the email sending when the component is rendered
    if (name && emailid && message) {
      sendEmail();
    }
  }, [name, emailid, message]);

  return (
    <form ref={form} style={{ display: 'none' }}>
      <input type="hidden" name="user_name" value={name} />
      <input type="hidden" name="user_email" value={emailid} />
      <input type="hidden" name="message" value={message} />
    </form>
  );
};
