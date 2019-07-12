export const add = () => ({"type": "ADD"});
export const minus = () => ({"type": "MINUS"});

export const addAfter2s = () => (dispatch,getState) => {
    setTimeout(function(){
        dispatch({"type": "ADD"})
    },2000);
    // alert(getState().counterReducer.a);
}