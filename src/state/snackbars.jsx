const ADD_SNACK = 'snackbars/ADD_SNACK'
const REMOVE_SNACK = 'snackbars/REMOVE_SNACK'

const COLOR = {
    red: '#ff0000'
}

export const addSnackbars = (text, color='green', time=3000) => (dispatch, getState) => {
    const key = Date.now()
    const rightColor = COLOR[color] || color
    dispatch (addSnackBarsAction(text, rightColor, key))
    setTimeout(() => dispatch(removeSnackBarsAction(key)), time)
}

const addSnackBarsAction = (text, color, key) => ({
    type: ADD_SNACK, 
    text, 
    color, 
    key
})

const removeSnackBarsAction = (key) => ({
    type: REMOVE_SNACK, 
    key
}
)

const initialState = {
    bars: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case ADD_SNACK:
    return { ...state, bars: [{
        text: action.text, 
        color: action.color,
        key: action.key
    },
    ...state.bars] }

  case REMOVE_SNACK:
    return { ...state, bars: state.bars.filter(el => el.key !== action.key)
    }  

  default:
    return state
  }
}
