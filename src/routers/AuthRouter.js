import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AuthRouter = () => {
    return (
      <div className="auth__main">
        <div className="auth__box-container">
        <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
          <Route exact path="/" component={JournalScreen} />
          
          <Redirect to="/auth/login" />
        </Switch>

        </div>
      </div>
    );
}
