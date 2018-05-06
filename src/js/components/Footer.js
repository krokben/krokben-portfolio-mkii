import React from 'react';
import BEMHHelper from 'react-bem-helper';

const bem = new BEMHHelper({ name: 'footer' });

export default function Footer() {
  return (
    <div {...bem()}>
      <ul {...bem('list')}>
        <li {...bem('item')}><a {...bem('link')}>home</a></li>
        <li {...bem('item')}><a {...bem('link')}>about</a></li>
        <li {...bem('item')}><a {...bem('link')}>skills</a></li>
        <li {...bem('item')}><a {...bem('link')}>portfolio</a></li>
        <li {...bem('item')}><a {...bem('link')}>contact</a></li>
      </ul>
    </div>
  );
}
