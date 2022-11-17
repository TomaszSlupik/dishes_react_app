import React from 'react'
import { connect } from 'react-redux'
import {InputAdornment, TextField} from '@mui/material'
import Ingredients from '../Ingredients/Ingredients'


const MAX_NAME_LENGTH = 45
const MIN_NAME_LENGTH = 4
const MIN_DESCRIPTION_LENGTH = 20
const MAX_DESCRIPTION_LENGTH = 150
const MAX_TIME = 240

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

    const timeValidate = (value) => {
        value = Number(Number(value).toFixed(2))
        setTime(value)
        const isError = value < 1
        setTimeError(isError)
        return isError
    }

    const setValidTime = value => {
        setTime(value < 0 ? 0 : value > MAX_TIME ? MAX_TIME : value)
    }


const [photo, setPhoto] = React.useState ('')
const [photoError, setPhotoError] = React.useState(false)
const photoValidate = value => {
    const isError = !value 
    setPhotoError(isError)
    return isError
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
            label: 'Składniki'
        },
        {
            label: 'Sposób przyrządzenia', 
            value: description, 
            onChange: setValidDescription, 
            error: descriptionError, 
            validate: descriptionValue, 
            helperText: 'Zbyt krótki opis, min. 20 znaków', 
            multiline: true
        },
        {
            label: 'Czas przygotowania', 
            value: time, 
            onChange: setValidTime, 
            error: timeError, 
            validate: timeValidate, 
            helperText: 'Podaj czas', 
            type: 'number', 
            InputProps: {
                endAdornment: <InputAdornment position='end'>min</InputAdornment>,
            }
        },
        {
            label: 'Zdjęcie', 
            value: photo, 
            onChange: setPhoto, 
            error: photoError, 
            validate: photoValidate, 
            helperText: 'Podaj url zdjęcia', 
            placeholder: 'http://'
           
        },
    
    ]


  return (
    <div
    style={styles.div}>
        {inputs.map(el=> el.label === 'Składniki' ? 
        <Ingredients 
        key={el.label}/> 
        : 
        (
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
        
        ))
        
        }
        
    </div>
    
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)