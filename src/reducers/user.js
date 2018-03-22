import {UserTypes as types} from '../action-types';
import objectAssign from 'object-assign';

type STATE = {};
type ACTION = {};
const initialState: STATE = {
  users: null,
  currentUser: null,
  error: null,
};

export default function(state: STATE = initialState, action: ACTION) {
  switch (action.type) {
    case types.CREATE_USER_OBJECT:
      return objectAssign({}, state, {currentUser: action.user});
    case types.CREATE_USER_ERROR_OBJECT:
      return objectAssign({}, state, {
        currentUser: null,
        error: action.message,
      });
    case types.CREATE_USER_OBJECTS:
      return objectAssign({}, state, {users: action.users});
    case types.FEATCH_USER_OBJECT:
      return objectAssign({}, state, {currentUser: action.user});

    default:
      return state;
  }
}