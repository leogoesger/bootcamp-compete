import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/home/Layout';
import {createUser, fetchUsers, fetchUser} from '../actions/user';

export class Home extends React.Component {
  render() {
    return (
      <Layout
        users={this.props.users}
        currentUser={this.props.currentUser}
        createUser={userName => this.props.createUser(userName)}
        fetchUsers={() => this.props.fetchUsers()}
        fetchUser={userName => this.props.fetchUser(userName)}
      />
    );
  }
}

Home.propTypes = {
  users: PropTypes.array,
  currentUser: PropTypes.object,
  createUser: PropTypes.func,
  fetchUsers: PropTypes.func,
  fetchUser: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    users: state.user.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: userName => dispatch(createUser(userName)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: userName => dispatch(fetchUser(userName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
