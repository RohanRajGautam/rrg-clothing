import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlPath) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlPath]
  );
