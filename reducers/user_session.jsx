import {SIGN_IN, LOGOUT, CREATE_USER} from '../constants'

const initialState = {
    username : null
}

export default function manage_session(state = initialState, action) {
    // TODO: Add authentication and actual chek
    if(action.type === SIGN_IN) {
        return { username: action.username }
    } else if(action.type === LOGOUT) {
        return { username : null }
    } else if (action.type === CREATE_USER) {
        return { username : action.username }
    }
    return state
}