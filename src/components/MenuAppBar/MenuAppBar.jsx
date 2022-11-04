import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { openDrawerAction} from '../../state/drawer'
import { connect } from 'react-redux'

const styles = {
  toolbar: { justifyContent: 'space-between'},
  logo: {position: 'absolute', left: '50%',  top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'row'},
  logoText: {fontSize: '1.25rem', padding: '0.4em 0.4em', fontWeight: 'bold', fontFamily: 'Dancing Script'},
  photo: {width: '40px', height: '40px'}
}

export const MenuAppBar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
            style={styles.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={props._drawerOpen}
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <div style={styles.logo}>
          <img src={process.env.PUBLIC_URL + '/img/chef.png'} style={styles.photo} alt="logo"/>
          <p style={styles.logoText}>CheffSlupik</p>
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) =>( {
    _drawerOpen: () => dispatch(openDrawerAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar)

