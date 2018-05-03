import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSkills } from '../actions/skillActions';

class Skills extends Component {
  componentWillMount() {
    this.props.fetchSkills();
  }

  render() {
    const skills = this.props.skills.map(skill => (
      <div key={skill.id}>
        <h3>{skill.title}</h3>
        <p>{skill.body}</p>
      </div>
    ));
    return (
      <div>
        <h2>Skills</h2>
        {skills}
      </div>
    );
  }
}

Skills.propTypes = {
  fetchSkills: PropTypes.func.isRequired,
  skills: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  skills: state.skills.items
});

export default connect(mapStateToProps, { fetchSkills })(Skills);
