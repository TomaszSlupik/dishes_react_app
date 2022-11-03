import React from 'react'
import { connect } from 'react-redux'
import { SwipeableDrawer } from '@mui/material'
import { useState } from 'react'

export const Drawer = (props) => {

    const [open, setOpen] = useState(false)

  return (
    <div>
        <SwipeableDrawer
            open={open}
            onClose={()=> setOpen(false)}
            onOpen={()=> setOpen(true)}
          >
           
          </SwipeableDrawer>


    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)

