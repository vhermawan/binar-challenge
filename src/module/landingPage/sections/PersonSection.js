import { connect } from "react-redux"
import React from "react"

function Person(props){
  console.log('props', props)
  return(
    <>Person</>
  )
}

const mapStateToProps = state => ({
  data: state.persons
})

export default connect(mapStateToProps)(Person)