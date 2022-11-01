import { CircularProgress } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import "./ProgressFullScren.css"

export const ProgressFullScren = (props) => {
  
  return (
    props._isOpen == 0 ?
    <div className='circularProgressbox'>
        <CircularProgress 
        size={100}
        />

     </div>
     :
     null   
  )
}

const mapStateToProps = (state) => ({
  _isOpen: state.progressfullscren.circulars
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressFullScren)

