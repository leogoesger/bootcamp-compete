import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  render() {
    return (
      <div>
        <div
          className="col-lg-8 col-md-8 col-xs-12"
          style={styles.inputContainer}
        >
          <TextField
            label="Enter FCC User Name to Compete!"
            onChange={e => this.handleChange(e)}
            fullWidth
          />
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  text: PropTypes.string,
};

const styles = {
  inputContainer: {
    margin: '120px auto',
  },
};
