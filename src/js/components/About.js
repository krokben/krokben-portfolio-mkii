import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHHelper from 'react-bem-helper';
import {  MarkdownPreview  } from 'react-marked-markdown';
import { fetchAboutMarkdown } from '../actions/aboutActions';

const bem = new BEMHHelper({ name: 'about' });

class About extends Component {
  componentWillMount() {
    this.props.fetchAboutMarkdown();
  }

  render() {
    return (
      <div {...bem()}>
        <div {...bem('blurb')}>
          <div {...bem('portrait-wrapper')}>
            <div {...bem('portrait')} />
          </div>
          <div {...bem('text-wrapper')}>
            <div {...bem('text-container')}>
              <h2 {...bem('title')}>Tommy Svensson</h2>
              <MarkdownPreview {...bem('info')} value={this.props.markdown} />
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
}

About.propTypes = {
  fetchAboutMarkdown: PropTypes.func.isRequired,
  markdown: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  markdown: state.about.markdown,
});

export default connect(mapStateToProps, { fetchAboutMarkdown })(About);
