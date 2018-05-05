import React from 'react';
import BEMHHelper from 'react-bem-helper';

const bem = new BEMHHelper({ name: 'about' });

export default function Arrow() {
  return (
    <div {...bem()}>
      <div {...bem('message')}>
        psst!
        <span> keep scrolling...</span>
      </div>
    </div>
  );
}
