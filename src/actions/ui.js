import { types } from "../types/types"

// mostrar error, action
export const setError = (err)=>({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
  type: types.uiRemoveError,
  
});