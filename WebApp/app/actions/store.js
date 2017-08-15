import * as types from '../action-types/store'
export function add(id) {
    return{
        type:types.ADD_STORE,
        data:id
    }
}
export function remove(id) {
return {
    type:types.REMOVE_STORE,
    data:id
}
}