import React from 'react';
import PropTypes from 'prop-types';
import {CircularProgress} from 'material-ui/Progress';

export default class Loader extends React.Component {
  render() {
    if (this.props.loading) {
      return (
        <div style={styles.container}>
          <div style={styles.content}>
            <div style={{margin: '0 auto'}}>
              <CircularProgress color="secondary" />
              <br />
              <p style={styles.loadText}>Firing it up...</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const styles = {
  container: {
    position: 'fixed',
    zIndex: '10',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    backgroundColor: `rgba(238, 238, 238, 0.9)`,
  },
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

Loader.propTypes = {
  loading: PropTypes.bool,
};
