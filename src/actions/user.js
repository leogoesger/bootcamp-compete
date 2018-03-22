import request from 'superagent';
import {UserTypes as types} from '../action-types';

const createUserObject = user => {
  return {
    type: types.CREATE_USER_OBJECT,
    user,
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
      dispatch(createUserObject(user));
    } catch (e) {
      throw e;
    }
  };
}

export function fetchUsers() {
  return async dispatch => {
    try {
      const users = await request.get(`${process.env.SERVER_ADDRESS}/users`);
      dispatch(createUserObjects(users));
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
      dispatch(fetchUserObject(user));
    } catch (e) {
      throw e;
    }
  };
}
