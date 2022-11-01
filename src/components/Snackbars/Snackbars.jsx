import React from 'react'
import { connect } from 'react-redux'
import { Snackbar, SnackbarContent  } from '@mui/material'
import './Snackbars.css'

const bars = [
    {message: 'first', color: 'red'}, 
    {message: 'second', color: 'green'},
]

export const Snackbars = (props) => {
  return (
    <div>
    {bars.map((el, index) => (
       
        <Snackbar
        style={{position: 'fixed', bottom: (30 + 70*index)}}
        key={el.message}
        open={true}
        >
         <SnackbarContent 
         style={{backgroundColor: el.color}}
         message={el.message}
         />   
        </Snackbar>
       
    ))}
   </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Snackbars)