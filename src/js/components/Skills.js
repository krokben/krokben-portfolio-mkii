import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BEMHHelper from 'react-bem-helper';
import { fetchSkills, setActiveSkill } from '../actions/skillActions';

const bem = new BEMHHelper({ name: 'skills' });

class Skills extends Component {
  componentWillMount() {
    this.props.fetchSkills();
  }

  createSkill(skill, bar) {
    // bar has to have the same name as the state property
    return (
      <div
        key={`skill-${skill.title}`}
        {...bem('skill-wrapper')}
      >
        <div
          {...bem('skill')}
          style={{ backgroundColor: skill.color }}
          onClick={() => this.props.setActiveSkill(skill, bar)}
        >
          {skill.title}
        </div>
      </div>
    );
  }

  createGrades(color, i) {
    return (
      <div
        key={`grade-${i}`}
        {...bem('grade')}
        style={{ backgroundColor: color }}
      />
    )
  }

  render() {
    const skillsTop = this.props.skills
      .filter((skill, i) => i < 5)
      .map(skill => this.createSkill(skill, 'bar1'));
    const skillsBottom = this.props.skills
      .filter((skill, i) => i >= 5)
      .map(skill => this.createSkill(skill, 'bar2'));
    return (
      <div {...bem('wrapper')}>
        <div {...bem()}>
          <div {...bem('container')}>
            <div {...bem('skills', 'top')}>
              {skillsTop}
            </div>
            <div {...bem('bar', 'top')}>
              {
                [...Array(this.props.bar1.value)]
                  .map((grade, i) => this.createGrades(this.props.bar1.color, i))
              }
            </div>
            <div {...bem('bar', 'bottom')}>
              {
                [...Array(this.props.bar2.value)]
                  .map((grade, i) => this.createGrades(this.props.bar2.color, i))
              }
            </div>
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
  bar1: PropTypes.object.isRequired,
  bar2: PropTypes.object.isRequired,
  fetchSkills: PropTypes.func.isRequired,
  setActiveSkill: PropTypes.func.isRequired,
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  bar1: state.skills.bar1,
  bar2: state.skills.bar2,
  skills: state.skills.items,
});

export default connect(mapStateToProps, { fetchSkills, setActiveSkill })(Skills);
