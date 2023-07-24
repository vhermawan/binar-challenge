import * as actionType from "../actionsType/car";

const initialState = {
  cars: [],
  idCar: null,
  detailCar: null,
  loading: false
}

export default function CarReducer(state= initialState, action){
  switch(action.type){
    case actionType.START_GET_DATA:
      return {
        ...state,
        loading: true,
      }
    case actionType.FINISH_GET_DATA:
      return {
        ...state,
       loading: false
      }
    case actionType.SET_DATA:
      return {
        ...state,
        cars: action.data
      }
    default:
      return state
  }
}