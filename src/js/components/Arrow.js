import React from 'react';
import BEMHHelper from 'react-bem-helper';

const bem = new BEMHHelper({ name: 'arrow' });

export default function Arrow() {
  return <div {...bem()} />;
}
