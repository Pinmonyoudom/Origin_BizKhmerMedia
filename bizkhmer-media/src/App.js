import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import CotentForm from './containers/Content';
import { Auth } from 'aws-amplify';

import './styles/styles.css';
import './styles/css.css';
import './styles/settings.css';
import './styles/all.min.css';
import './styles/animate-custom.css';
import './styles/style.min.css';
import './styles/foundation.min.css';
import './styles/app.css';
import './styles/style.css';
import './styles/slick.min.css';
import './styles/slick-theme.min.css';
import './styles/js_composer.min.css';
import './styles/js_composer_tta.min.css';
import './styles/font-awesome.min.css';
import './styles/animate.min.css';
import './App.css';
import AuthenticatedRoute from './containers/AuthenticatedRoute';
import UnauthenticatedRoute from './containers/UnauthenticatedRoute';

function AppRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    Auth.currentSession()
      .then(res => {
        setIsAuthenticated(true);
        window.localStorage.setItem('userToken', res.idToken.jwtToken);
      })
      .catch(err => {
        setIsAuthenticated(false);
      });
  }, []);
  const userHasAuthenticated = auth => {
    setIsAuthenticated(auth);
  };
  const childProps = {
    isAuthenticated,
    userHasAuthenticated: userHasAuthenticated
  };

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <UnauthenticatedRoute
        props={childProps}
        path="/login"
        exact
        component={Login}
      />
      <AuthenticatedRoute
        path="/contents"
        component={CotentForm}
        props={{ ...childProps, language: 'en' }}
      />
      <AuthenticatedRoute
        path="/contentszh"
        component={CotentForm}
        props={{ ...childProps, language: 'zh' }}
      />
      <AuthenticatedRoute
        path="/contentskm"
        component={CotentForm}
        props={{ ...childProps, language: 'km' }}
      />
    </Router>
  );
}

export default AppRouter;
