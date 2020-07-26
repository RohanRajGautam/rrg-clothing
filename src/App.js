import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      CurrentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              CurrentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ CurrentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header CurrentUser={this.state.CurrentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
