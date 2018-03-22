import React from 'react';
import PropTypes from 'prop-types';

export default class Overview extends React.Component {
  handleChange(e) {
    this.setState({input: e.target.value});
  }

  render() {
    return <div>Overview</div>;
  }
}

Overview.propTypes = {
  users: PropTypes.array,
};

const styles = {
  inputContainer: {
    margin: '120px auto',
  },
};
