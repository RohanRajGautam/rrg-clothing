import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from './Header.styles';

const Header = ({ CurrentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/' className='logo-container'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionContainer className='options'>
      <OptionLink to='/shop' className='option'>
        SHOP
      </OptionLink>
      <OptionLink to='/contact' className='option'>
        CONTACT
      </OptionLink>
      {CurrentUser ? (
        <OptionLink as='div' className='option' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin' className='option'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  CurrentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
