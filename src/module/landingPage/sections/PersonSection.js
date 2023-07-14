import { connect } from "react-redux"
import React from "react"
import { actionSetIdUser } from "../../../common/redux/actions/person";

function Person(props){

  console.log('props', props.data)
  return(
    <>
      Person 
      <button onClick={()=>props.setIdUser(1)}>Set ID</button>
    </>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    setIdUser: (payload) => dispatch(actionSetIdUser(payload)),
  }
}

const mapStateToProps = state => ({
  data: state.persons
})

export default connect(mapStateToProps, mapDispatchToProps)(Person)