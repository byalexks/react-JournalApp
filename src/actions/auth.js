import { types } from "../types/types"
import { firebase, googleAuthProvider } from "../firebase/firebase-config"

export const startLoginEmailPassword = (email, passowrd) =>{
    return (dispatch)=>{

        setTimeout(() => {
            dispatch(login(123,'Pedro'))
        }, 3500);

    }
}

export const startGoogleLogin = ()=>{
    return (dispatch) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user}) =>{
                dispatch(
                    login(user.uid, user.displayName)
                )
            })


    }
}


export const login = (iud, displayName)=> ({
    type: types.login,
    payload:{
        iud,
        displayName
    }  

})

export const logout = (iud, displayName) => ({
  type: types.Logout,
  payload: {

  },
});