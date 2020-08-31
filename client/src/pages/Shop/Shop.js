import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionContainer from '../Collections/collection.container';

import { fetchCollection } from '../../redux/shop/shop.action';

const Shop = ({ fetchCollection, match }) => {
  useEffect(() => {
    fetchCollection();
  }, [fetchCollection]);

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
  fetchCollection: () => dispatch(fetchCollection()),
});

export default connect(null, mapDispatchToProps)(Shop);
