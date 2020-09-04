import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';

import Header from './components/header/Header';
import Spinner from './components/Spinner/spinner-component';

import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user.actions';

import ErrorBoundary from './components/error-boundary/error-boundary.component';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const SignInAndSignUp = lazy(() =>
  import('./pages/SignInAndSignUp/SignInAndSignUp')
);

const App = ({ checkUserSession, CurrentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route
              exact
              path='/signin'
              render={() =>
                CurrentUser ? <Redirect to='/' /> : <SignInAndSignUp />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  CurrentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
