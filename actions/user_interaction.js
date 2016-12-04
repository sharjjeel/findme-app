import { ADD_ITEM, CHANGE_ITEM_STATUS, DELETE_ITEM } from '../constants'

// POST
export function addItem(name, description, longitude, latitude, lost) {
    return {
        type: ADD_ITEM,
        name,
        description,
        longitude,
        latitude,
        lost
    }
}

// PUT
export function changeItemStatus(id) {
    return {
        type: CHANGE_ITEM_STATUS,
        id
    }
}

// DELETE
export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        id
    }
}