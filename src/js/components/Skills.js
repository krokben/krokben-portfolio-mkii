import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHHelper from 'react-bem-helper';
import { fetchSkills } from '../actions/skillActions';

const bem = new BEMHHelper({ name: 'skills' });

class Skills extends Component {
  componentWillMount() {
    this.props.fetchSkills();
  }

  createSkill(title) {
    return (
      <div
        key={`skill-${title}`}
        {...bem('skill-wrapper')}
      >
        <div {...bem('skill')}>
          {title}
        </div>
      </div>
    );
  }

  render() {
    const skillsTop = this.props.skills
      .filter((skill, i) => i < 5)
      .map(skill => this.createSkill(skill.title));
    const skillsBottom = this.props.skills
      .filter((skill, i) => i >= 5)
      .map(skill => this.createSkill(skill.title));
    return (
      <div {...bem('wrapper')}>
        <div {...bem()}>
          <div {...bem('container')}>
            <div {...bem('skills', 'top')}>
              {skillsTop}
            </div>
            <div {...bem('bar', 'top')} />
            <div {...bem('bar', 'bottom')} />
            <div {...bem('skills', 'bottom')}>
              {skillsBottom}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  fetchSkills: PropTypes.func.isRequired,
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  skills: state.skills.items,
});

export default connect(mapStateToProps, { fetchSkills })(Skills);
