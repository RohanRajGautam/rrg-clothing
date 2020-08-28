import { all, call } from 'redux-saga/effects';

import { shopSaga } from './shop/shop.sagas';
import { userSaga } from './user/user.sagas';
import { cartSaga } from './cart/cart.sagas';

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSaga), call(cartSaga)]);
}
