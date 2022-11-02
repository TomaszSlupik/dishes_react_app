import React from 'react'
import { connect } from 'react-redux'
import { Snackbar, SnackbarContent  } from '@mui/material'


// const bars = [
//     {message: 'first', color: 'red'}, 
//     {message: 'second', color: 'green'},
// ]

export const Snackbars = (props) => {
 
  return (
    <div>
    {props._bars.map((el, index) => (
       
        <Snackbar
        style={{position: 'fixed', bottom: (30 + 70*index)}}
        key={el.key}
        open={true}
        >
         <SnackbarContent 
         style={{backgroundColor: el.color}}
         message={el.text}
         />   
        </Snackbar>
       
    ))}
   </div>
  )
}

const mapStateToProps = (state) => ({
    _bars: state.snackbars.bars
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Snackbars)