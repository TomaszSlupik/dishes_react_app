const OPEN_DRAWER = 'drawer/OPEN_DRAWER'
const CLOSE_DRAWER = 'drawer/CLOSE_DRAWER'

export const openDrawerAction = () => ({
    type: OPEN_DRAWER
})

export const closeDrawerAction = () => ({
    type: CLOSE_DRAWER
})

const initialState = {
    isOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {

  case OPEN_DRAWER:
    return { ...state, isOpen: true}

   case CLOSE_DRAWER:
    return {...state, isOpen: false} 

  default:
    return state
  }
}

