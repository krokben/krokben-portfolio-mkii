import React from 'react';
import BEMHHelper from 'react-bem-helper';
import Form from './Form';

const bem = new BEMHHelper({ name: 'contact' });

export default function Contact() {
  return (
    <div {...bem()}>
      <h3>Got any interesting ideas?</h3>
      <h2 {...bem('headline')}>Send me a message!</h2>
      <div {...bem('form-container')}>
        <Form />
      </div>
    </div>
  );
}
