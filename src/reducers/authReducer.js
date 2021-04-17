
/* idea del reducer
    {
        uid: dafdasfasfafwqarw
        name: alex
    }

*/

import { types } from "../types/types";

export const authReducer = ( state ={},action ) =>{

        switch (action.type) {
            case  types.login:
                return{
                    
                    uid: action.payload.login,
                    name: action.payload.displayName
                }
            case  types.logout:
                return{ }    
                
        
            default:
                return state;
        }


}