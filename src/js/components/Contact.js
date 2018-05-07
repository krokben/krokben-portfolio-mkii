import React from 'react';
import BEMHHelper from 'react-bem-helper';
import Form from './Form';

const bem = new BEMHHelper({ name: 'contact' });

export default function Contact() {
  return (
    <div {...bem()}>
      <div {...bem('header')}>
        <h3 {...bem('header-question')}>Got any interesting ideas?</h3>
        <h2>Send me a message!</h2>
      </div>
      <div {...bem('form-container')}>
        <Form />
      </div>
    </div>
  );
}
