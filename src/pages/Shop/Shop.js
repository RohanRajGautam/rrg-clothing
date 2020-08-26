import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionContainer from '../Collections/collection.container';

import { fetchCollectionAsync } from '../../redux/shop/shop.action';

const Shop = ({ fetchCollectionAsync, match }) => {
  useEffect(() => {
    fetchCollectionAsync();
  }, [fetchCollectionAsync]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionAsync: () => dispatch(fetchCollectionAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
