import * as actionType from '../actionsType/person';

const initialState = {
  person: [
    {
      id: 1,
      name: 'Ryan Gosling',
      address: 'Loz Feliz',
    },
  ],
  idPerson: null,
};

export default function PersonReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD:
      return {
        ...state,
        person: action.payload,
      };
    case actionType.SET_ID:
      return {
        ...state,
        idPerson: action.payload,
      };
    default:
      return state;
  }
}
