import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase-config";
import { BrowserRouter as Router, Switch,  Redirect } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { login } from "../actions/auth";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  const dispatch = useDispatch()

  const [cheking, setCheking] = useState(true)
  const [isLoggeIn, setIsLoggeIn] = useState(false)

    useEffect(() => {

      firebase.auth().onAuthStateChanged((user) => {
        if (user?.uid) {
          dispatch(login(user.uid, user.displayName));
          setIsLoggeIn(true)
          console.log(user);
        } else {
          setIsLoggeIn(false)
        }
        setCheking(false);
      });
        
    }, [dispatch, setCheking, setIsLoggeIn]);

    if (cheking) {
      return (
          <h1>esperando...</h1>
      )
      
    }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={isLoggeIn}
            path="/auth"
            component={AuthRouter}
          />

          <PrivateRoutes
            isAuthenticated={isLoggeIn}
            exact
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
