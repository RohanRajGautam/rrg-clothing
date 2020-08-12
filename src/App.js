import React from "react";
import { connect } from "react-redux";

import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user/user.actions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user-selector";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.CurrentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  CurrentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
