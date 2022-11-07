import React from 'react'
import { connect } from 'react-redux'
import { SwipeableDrawer, List, ListItemText, ListItemButton } from '@mui/material'
import { openDrawerAction, closeDrawerAction } from '../../state/drawer'
import {withRouter} from 'react-router-dom' 


const links = [
  {
    title: 'Dodaj przepis',
    route: '/add-recipe'
  }, 
  {
    title:'Twoje przepisy',
    route: '/your-recipes'
  }, 
  {
    title: 'Przepisy',
    route: '/recipes'
  }
]



export const Drawer = (props) => {

  return (
    <div>
        <SwipeableDrawer
            open={props._isOpen}
            onClose={props._close}
            onOpen={props._open}
          >
            <List>
                {links.map(el=> (
                  <ListItemButton>
                  <ListItemText 
                  key={el.route}
                  onClick={()=>{
                    props._close()
                    props.history.push(el.route)
                  }}
                  primary={el.title}/>
                  </ListItemButton>
                ))}
            </List>
           
          </SwipeableDrawer>


    </div>
  )
}

const mapStateToProps = (state) => ({
  _isOpen: state.drawer.isOpen
})

const mapDispatchToProps = (dispatch) =>( {
    _open: () => dispatch(openDrawerAction()),
    _close: () => dispatch(closeDrawerAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Drawer))

