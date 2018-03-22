import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import {find} from 'lodash';

import Overview from './Overview';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      open: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({open: true});
    }
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  handleSnackBarClose() {
    this.setState({open: false});
    this.props.createUserError();
  }

  createUser(input) {
    const searchUser = find(
      this.props.users,
      user => user.username === input.toLowerCase()
    );

    if (searchUser) {
      this.props.createUserError('User already exists!');
    } else {
      this.props.createUser(input);
    }
  }

  render() {
    return (
      <div style={{marginBottom: '100px'}}>
        <div
          className="row col-lg-8 col-md-8 col-xs-12"
          style={styles.inputContainer}
        >
          <div className="col-lg-9 col-md-9 col-xs-9">
            <TextField
              label="Enter FCC User Name to Compete!"
              onChange={e => this.handleChange(e)}
              fullWidth
            />
          </div>
          <div className="col-lg-2 col-md-2 col-xs-2">
            <Button
              variant="raised"
              color="primary"
              onClick={() => this.createUser(this.state.input)}
            >
              Enter!
            </Button>
          </div>
        </div>

        <Overview users={this.props.users} />

        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
          open={this.state.open}
          onClose={() => this.handleSnackBarClose()}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={this.props.error}
        />
      </div>
    );
  }
}

Layout.propTypes = {
  error: PropTypes.string,
  users: PropTypes.array,
  createUser: PropTypes.func,
  createUserError: PropTypes.func,
};

const styles = {
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '120px auto',
  },
};
