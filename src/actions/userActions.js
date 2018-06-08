import { SUBMIT_USER }  from './actionTypes'

export const submitUser = (userData) => (dispatch, getState) => {
    dispatch({
        type: SUBMIT_USER,
        payload: userData
    });

    return(getState());
};