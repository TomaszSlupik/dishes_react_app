import React from 'react'
import { connect } from 'react-redux'
import {TextField} from '@mui/material'

import styleFunctionSx from '@mui/system/styleFunctionSx'
import zIndex from '@mui/material/styles/zIndex'

const styles = {
    div: {display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: '-1'},
    input: {maxWidth: 300, margin: '10px 0'}
}

export const AddRecipe = (props) => {

    const [name, setName] = React.useState('')

    const inputs = [
        {
            label: 'Nazwa',
            value: name
        }
    ]
  return (
    <div
    style={styles.div}>
        {inputs.map(el=>(
        <TextField 
        style={styles.input}
        variant='outlined'
        fullWidth
        key={el.value}
        label={el.label}
        value={el.value}
        />
        ))
        }
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)