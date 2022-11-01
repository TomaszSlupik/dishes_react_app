import { CircularProgress } from "@mui/material"

const ADD_CIRCULAR = 'progressfullscren/ADD_CIRCULAR'
const REMOVE_CIRCULAR = 'progressfullscren/REMOVE_CIRCULAR'

const addCircularAction = () => ({
    type: ADD_CIRCULAR
})

const removeCircularAction = () => ({
    type: REMOVE_CIRCULAR
})

export const circularProgress = {
    add: addCircularAction, 
    remove: removeCircularAction
}


const initialState = {
    circulars : []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case ADD_CIRCULAR:
    return { ...state, circulars: [...state.circulars, true] }

    case REMOVE_CIRCULAR:
        return { ...state, circulars: state.circulars.filter((el, index) => 
            index !== 0 )
        }

  default:
    return state
  }
}
