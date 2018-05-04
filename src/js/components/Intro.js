import React from 'react';
import BEMHHelper from 'react-bem-helper';

const bem = new BEMHHelper({ name: 'intro' });

export default function Intro() {
  return (
    <div {...bem()}>
      <div {...bem('banner')}>
        <h1 {...bem('title')}>krokben.se</h1>
        <h2 {...bem('subtitle')}>front end developer</h2>
      </div>
    </div>
  );
}
