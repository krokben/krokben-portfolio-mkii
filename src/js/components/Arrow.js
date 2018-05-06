import React from 'react';
import BEMHHelper from 'react-bem-helper';
import { Link } from 'react-scroll';

const bem = new BEMHHelper({ name: 'arrow' });

export default function Arrow() {
  return <Link smooth={true} duration={500} to="about"><div {...bem()} /></Link>;
}
