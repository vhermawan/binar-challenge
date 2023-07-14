import * as actionType from '../actionsType/person';

export const actionAddUser = () => ({
  type: actionType.ADD,
});

export const actionSetIdUser = payload => ({
  type: actionType.SET_ID,
  payload,
});
