import request from 'superagent';
import {UserTypes as types} from '../action-types';

const createUserObject = user => {
  return {
    type: types.CREATE_USER_OBJECT,
    user,
  };
};

const createUserErrorObject = message => {
  return {
    type: types.CREATE_USER_ERROR_OBJECT,
    message,
  };
};

const createUserObjects = users => {
  return {
    type: types.CREATE_USER_OBJECTS,
    users,
  };
};

const fetchUserObject = user => {
  return {
    type: types.FEATCH_USER_OBJECT,
    user,
  };
};

export function createUser(userName) {
  return async dispatch => {
    try {
      const user = await request
        .post(`${process.env.SERVER_ADDRESS}/users`)
        .send({username: userName});
      fetchUsers();
      dispatch(createUserObject(user.body));
      dispatch(createUserErrorObject());
    } catch (e) {
      dispatch(createUserErrorObject(e.response.body.message));
    }
  };
}

export function createUserError(message) {
  return dispatch => {
    dispatch(createUserErrorObject(message));
  };
}

export function fetchUsers() {
  return async dispatch => {
    try {
      const users = await request.get(`${process.env.SERVER_ADDRESS}/users`);
      dispatch(createUserObjects(users.body));
    } catch (e) {
      throw e;
    }
  };
}

export function fetchUser(userName) {
  return async dispatch => {
    try {
      const user = await request.get(
        `${process.env.SERVER_ADDRESS}/users/${userName}`
      );
      dispatch(fetchUserObject(user.body));
    } catch (e) {
      throw e;
    }
  };
}
