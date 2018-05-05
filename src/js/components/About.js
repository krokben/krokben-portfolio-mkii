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
            <h2 {...bem('title')}>Tommy Svensson</h2>
            <p {...bem('info')}>
              Swedish guy who&nbsp;
              studied 2 years of Front end development at KYH in Stockholm.&nbsp;
              Well versed in technologies such as React, Redux, Webpack 4, SASS,&nbsp;
              Contentful, Craft CMS. 7 months experience of working agile in a team&nbsp;
              at an agency in Berlin with designers and other developers.&nbsp;
              Have studied music (piano) for several years as well as Japanese.&nbsp;
              Somewhat active in the electronic music scene in Berlin.&nbsp;
              Really excited about everything JavaScript.&nbsp;
              <span role="img" aria-label="Nerd smiley">🤓</span>
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
