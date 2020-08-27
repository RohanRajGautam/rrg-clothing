import { takeEvery, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.action';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = yield firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}
