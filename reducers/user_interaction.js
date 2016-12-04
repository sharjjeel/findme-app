import { ADD_ITEM, CHANGE_ITEM_STATUS, DELETE_ITEM } from '../constants'
import {List, Map} from 'immutable'

const initialState = new List();
let id = 0;

export default function manage_session(state = initialState, action) {
    // TODO: Add authentication and actual persistence
    if(action.type === ADD_ITEM) {
        return state.append(
            new Map({id: ++id, name : action.name, description: action.description,
            longitude : action.longitude, latitude: action.latitude, lost: action.lost}));
    } else if(action.type === CHANGE_ITEM_STATUS) {
        return state.map(item => item.id == action.id ? item.set('lost', !item.get('lost')) : item)
    } else if (action.type === DELETE_ITEM) {
        return state.filter(item => item.id != action.id);
    }
    return state
}