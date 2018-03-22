import React from 'react';
import PropTypes from 'prop-types';

export default class Plot extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        {JSON.stringify(this.props.currentUser)}
      </div>
    );
  }
}

const styles = {
  container: {},
  content: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loadText: {
    paddingTop: '30px',
    color: '#ff8f00',
    fontSize: '16px',
    marginLeft: '-20px',
  },
};

Plot.propTypes = {
  currentUser: PropTypes.object,
};
