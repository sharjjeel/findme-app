import { SIGN_IN, LOGOUT, CREATE_USER} from '../constants'

export function signIn(username, password) {
    return {
        type: SIGN_IN,
        username,
        password
    }
}

export function createUser(username, password) {
    return {
        type: CREATE_USER,
        username,
        password
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}