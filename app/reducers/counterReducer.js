const initObj = {
    a : 10
};

export default (state = initObj, action) => {
    if(action.type == "ADD"){
        return {
            ...state,
            a : state.a + 1
        }
    }
    return state;
}