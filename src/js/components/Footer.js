import React from 'react';
import BEMHHelper from 'react-bem-helper';
import { Link } from 'react-scroll';

const bem = new BEMHHelper({ name: 'footer' });

export default function Footer() {
  const links = ['home', 'about', 'skills', 'portfolio', 'contact'];
  return (
    <div {...bem()}>
      <ul {...bem('list')}>
        {
          links.map(link => (
            <li key={`footer-${link}`} {...bem('item')}>
              <Link
                {...bem('link')}
                smooth
                duration={500}
                to={link}
              >
                {link}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
