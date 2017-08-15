import * as types from '../action-types/store'
let initState=[];
export function store(state=initState,action){
switch (action.type){
    case types.ADD_STORE:
        return [...state,action.data];
    case types.REMOVE_STORE:
        return state.filter((item)=>action.data!==item) ;
    default:
        return state;
}
}