import React from 'react';
import BEMHHelper from 'react-bem-helper';
import { Link } from 'react-scroll';

const bem = new BEMHHelper({ name: 'footer' });

export default function Footer() {
  return (
    <div {...bem()}>
      <ul {...bem('list')}>
        <li {...bem('item')}><Link smooth={true} duration={500} to="Intro">home</Link></li>
        <li {...bem('item')}><Link smooth={true} duration={500} to="About">about</Link></li>
        <li {...bem('item')}><Link smooth={true} duration={500} to="Skills">skills</Link></li>
        <li {...bem('item')}><Link smooth={true} duration={500} to="Portfolio">portfolio</Link></li>
        <li {...bem('item')}><Link smooth={true} duration={500} to="Contact">contact</Link></li>
      </ul>
    </div>
  );
}
