import React from 'react';
import BEMHHelper from 'react-bem-helper';
import Form from './Form';

const bem = new BEMHHelper({ name: 'contact' });

export default function Contact() {
  return (
    <div {...bem()}>
      <div {...bem('form-container')}>
        <Form />
      </div>
    </div>
  );
}
