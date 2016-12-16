import React, { Component, PropTypes } from 'react';

export default class Route extends Component {
  render() {
    return (
      <li>{this.props.route.name}</li>
    );
  }
}

Route.propTypes = {
  route: PropTypes.object.isRequired,
};
