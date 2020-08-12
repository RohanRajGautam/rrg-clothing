import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectCartHidden } from "../../redux/cart/cart-selector";

const Header = ({ CurrentUser, hidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/contact' className='option'>
        CONTACT
      </Link>
      {CurrentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to='/signin' className='option'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  CurrentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
