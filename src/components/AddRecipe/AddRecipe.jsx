import React from 'react'
import { connect } from 'react-redux'
import {TextField} from '@mui/material'

import styleFunctionSx from '@mui/system/styleFunctionSx'
import zIndex from '@mui/material/styles/zIndex'

const MAX_NAME_LENGTH = 45
const MIN_NAME_LENGTH = 4
const MIN_DESCRIPTION_LENGTH = 20
const MAX_DESCRIPTION_LENGTH = 150

const styles = {
    div: {display: 'flex', flexDirection: 'column', alignItems: 'center'},
    input: {maxWidth: 300, margin: '10px 0'}
}

export const AddRecipe = (props) => {

    const [name, setName] = React.useState('')
    const [nameError, setNameError] = React.useState(false)
    const nameValidate = (value) => {
        const validvalue = value && value.replace (/\s{2,}/g, '')
        if (value !== validvalue) {
            setName(validvalue)
        }
        const isError = !validvalue || validvalue.length < MIN_NAME_LENGTH
        setNameError(isError)
        return isError
    }
    const setValidName = (string) => {
        if (string.length < MAX_NAME_LENGTH) {
            setName (string)
        }
    }

    const [description, setDescription] = React.useState('')
    const [descriptionError, setDescriptionError] = React.useState(false)
    const descriptionValue = (value) => {
        const validvalue = value && value.replace (/\s{2,}/g, '')
        if (value !== validvalue) {
            setDescription(validvalue)
        }
        const isError = !validvalue || validvalue.length < MIN_DESCRIPTION_LENGTH
        setDescriptionError(isError)
        return isError
    }
    const setValidDescription = string => {
        if (string.length < MAX_DESCRIPTION_LENGTH) {
            setDescription(string)
        }
    }

    const [time, setTime] = React.useState('')
    const [timeError, setTimeError] = React.useState(false)

    const timeValue = () => {

    }

    const setValidTime = string => {
        setTime(string)
    }






    const inputs = [
        {
            label: 'Nazwa',
            value: name,
            onChange: setValidName, 
            error: nameError,
            validate: nameValidate,
            helperText: 'Zbyt krótka nazwa, min. 4 znaki', 
            multiline: false
        }, 
        {
            label: 'Sposób przyrządzenia', 
            value: description, 
            onChange: setValidDescription, 
            error: descriptionError, 
            validate: descriptionValue, 
            helperText: 'Zbyt krótki opis', 
            multiline: true
        },
        {
            label: 'Czas przygotowania', 
            value: time, 
            onChange: setValidTime, 
            error: setTimeError, 
            validate: timeValue, 
            helperText: 'Podaj czas', 
            multiline: false, 
            type: 'number'
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
        />
        ))
        }
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)