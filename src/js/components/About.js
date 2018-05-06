import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHHelper from 'react-bem-helper';
import { MarkdownPreview } from 'react-marked-markdown';
import { fetchAboutImage, fetchAboutMarkdown } from '../actions/aboutActions';

const bem = new BEMHHelper({ name: 'about' });

class About extends Component {
  componentWillMount() {
    this.props.fetchAboutImage();
    this.props.fetchAboutMarkdown();
  }

  render() {
    return (
      <div {...bem()}>
        <div {...bem('blurb')}>
          <div {...bem('portrait-wrapper')}>
            <div {...bem('portrait')} style={{ backgroundImage: `url(${this.props.image.url})` }}>
              <img src={this.props.image.url} alt={this.props.image.description} />
            </div>
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
  image: PropTypes.object.isRequired,
  fetchAboutImage: PropTypes.func.isRequired,
  fetchAboutMarkdown: PropTypes.func.isRequired,
  markdown: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  image: state.about.image,
  markdown: state.about.markdown,
});

export default connect(mapStateToProps, { fetchAboutImage, fetchAboutMarkdown })(About);
