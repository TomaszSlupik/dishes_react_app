import React from 'react'
import {useScrollTrigger, Zoom, Fab} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const styles = {
    div: {position: 'fixed', bottom: 20, right: 20}
}

const upScroll = () => {
    window.scrollTo ({
        top: 0 
    })
}


export default function ScrollToTop() {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 70,
      });
    
  return (
    <div>
        <Zoom
        in={trigger}
        onClick={upScroll}>
            <div style={styles.div}>
                <Fab
                color='primary'
                size='small'>
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>

        </Zoom>
    </div>
  )
}
