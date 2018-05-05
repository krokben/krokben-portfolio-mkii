import React from 'react';
import BEMHHelper from 'react-bem-helper';

const bem = new BEMHHelper({ name: 'about' });

export default function Arrow() {
  return (
    <div {...bem()}>
      <div {...bem('blurb')}>
        <div {...bem('portrait-wrapper')}>
          <div {...bem('portrait')} />
        </div>
        <div {...bem('text-wrapper')}>
          <div {...bem('text-container')}>
            <h2 {...bem('title')}>tommy svensson</h2>
            <p {...bem('info')}>
              Knackar kod och kommer med kreativa lösningar.&nbsp;
              Gillar fin och strukturerad kod, ny teknik och minimalistisk design.&nbsp;
              Har spenderat några år i Berlin och Tokyo. Studerar frontend på KYH i Stockholm.
            </p>
          </div>
        </div>
      </div>
      <div {...bem('message')}>
        psst!
        <span> keep scrolling...</span>
      </div>
    </div>
  );
}
