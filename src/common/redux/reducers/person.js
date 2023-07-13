import { ADD } from "../actions/person";
const initialState = [ 
  {
    id:1,
    name:"Ryan Gosling",
    address:"Loz Feliz"
  }
]

export default function PersonReducer(state= initialState, action){
  switch(action.type){
    case ADD:
      return [...state, action.payload]
    default:
      return state
  }
}