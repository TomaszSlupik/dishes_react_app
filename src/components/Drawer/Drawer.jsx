import React from 'react'
import { connect } from 'react-redux'
import { SwipeableDrawer, List, ListItemText, ListItemButton } from '@mui/material'
import { useState } from 'react'
import { openDrawerAction, closeDrawerAction } from '../../state/drawer'


const links = [
  {
    title: 'Dodaj przepis'
  }, 
  {
    title:'Twoje przepisy'
  }, 
  {
    title: 'Przepisy'
  }
]



export const Drawer = (props) => {

    const [open, setOpen] = useState(true)

  return (
    <div>
        <SwipeableDrawer
            open={open}
            onClose={()=> setOpen(false)}
            onOpen={()=> setOpen(true)}
          >
            <List>
                {links.map(el=> (
                  <ListItemButton>
                  <ListItemText 
                  key={el.key}
                  primary={el.title}/>
                  </ListItemButton>
                ))}
            </List>
           
          </SwipeableDrawer>


    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)

