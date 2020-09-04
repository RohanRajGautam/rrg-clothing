import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollection } from '../../redux/shop/shop.action';
import Spinner from '../../components/Spinner/spinner-component';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collection-overview/collection-overview.container')
);
const CollectionContainer = lazy(() =>
  import('../Collections/collection.container')
);

const Shop = ({ fetchCollection, match }) => {
  useEffect(() => {
    fetchCollection();
  }, [fetchCollection]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: () => dispatch(fetchCollection()),
});

export default connect(null, mapDispatchToProps)(Shop);
