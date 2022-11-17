import React from 'react'
import {TextField} from '@mui/material'

export default function Ingredients() {
    const [ingredient, setIngredient] = React.useState('')

    const styles = {
        container: {maxWidth: 380},
        inputsDiv: {display: 'flex', justifyContent: 'center'}, 
        input: {margin: '10px 20px 10px 0', maxWidth: 150}
    }


    const inputs = [
        {
            label: 'Składniki', 
            value: ingredient
        }, 
        {

        }
    ]
   
  

  return (
    <div style={styles.container}>
        <div style={styles.inputsDiv}>
        {inputs.map(el => 
         <TextField 
        style={styles.input}
        variant='outlined'
        fullWidth
        key={el.label}
        label={el.label}
        value={el.value}
        error={el.error}
        helperText={el.error && el.helperText}
        onChange={evt => {el.onChange(evt.target.value)
        if (el.error) {
            el.validate (evt.target.value)
        }
        }}
        onBlur={()=> el.validate(el.value)}
        multiline={el.multiline}
        type={el.type || 'text'}
        InputProps={el.InputProps}
        placeholder={el.placeholder}
        />
        )}
        </div>
    </div>
  )
}
