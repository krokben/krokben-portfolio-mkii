/*
  Higher-Order Component to forward ref into parent component
  ...
  NOTE: This only works with single ref.
  Investigate further how to do this with multiple refs.
  Use landingElements.js until better solution figured out.
*/

import React, { Component } from 'react';

function withLanding(Component) {
  class WithLanding extends Component {
    render() {
      const { forwardRef, ...rest } = this.props;
      return <Component {...rest} ref={forwardRef} />;
    }
  }

  const forwardRef = (props, ref) => {
    return <WithLanding forwardRef={ref} {...props} />;
  };

  // Setup HOC display name for dev tools
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `withLanding(${name})`;

  return React.forwardRef(forwardRef);
}

export default withLanding;
