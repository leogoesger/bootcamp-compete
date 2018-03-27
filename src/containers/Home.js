import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Layout from '../components/home/Layout';
import {
  createUser,
  fetchUsers,
  updateUsers,
  updateUser,
  fetchUser,
  createUserError,
} from '../actions/user';

import io from 'socket.io-client'

const socket = io(process.env.SERVER_ADDRESS);

export class Home extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: null
  //   };
  // }
  
  componentWillMount() {
    this.props.fetchUsers();
    this.subscribeToDoneCrawling();
  }

  subscribeToDoneCrawling(){
    socket.on('doneCrawling', updatedProfiles => {
      this.props.updateUsers(updatedProfiles);

      let updatedUser = updatedProfiles.filter(user =>{
        return user.username === this.props.currentUser.username;
      })
      // this.setState({currentUser: updatedUser[0]});
      this.props.updateUser(updatedUser[0]);
    });
  }

  render() {
    return (
      <Layout
        users={this.props.users}
        error={this.props.error}
        createUser={userName => this.props.createUser(userName)}
        fetchUser={userName => this.props.fetchUser(userName)}
        createUserError={message => this.props.createUserError(message)}
        fetchingStatus={this.props.fetchingStatus}
        currentUser={/*this.state.currentUser ? this.state.currentUser : */this.props.currentUser}
      />
    );
  }
}

Home.propTypes = {
  users: PropTypes.array,
  createUser: PropTypes.func,
  fetchUsers: PropTypes.func,
  updateUsers: PropTypes.func,
  updateUser: PropTypes.func,
  fetchUser: PropTypes.func,
  error: PropTypes.string,
  createUserError: PropTypes.func,
  fetchingStatus: PropTypes.bool,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    users: state.user.users,
    error: state.user.error,
    fetchingStatus: state.user.fetchingStatus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: userName => dispatch(createUser(userName)),
    fetchUsers: () => dispatch(fetchUsers()),
    updateUsers: users => dispatch(updateUsers(users)),
    updateUser: userName => dispatch(updateUser(userName)),
    fetchUser: userName => dispatch(fetchUser(userName)),
    createUserError: message => dispatch(createUserError(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
