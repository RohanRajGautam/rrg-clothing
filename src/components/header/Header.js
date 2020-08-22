import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { selectCartHidden } from '../../redux/cart/cart-selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from './Header.styles';

const Header = ({ CurrentUser, hidden }) => (
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
        <OptionLink as='div' className='option' onClick={() => auth.signOut()}>
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

export default connect(mapStateToProps)(Header);
