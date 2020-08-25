import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collection-overview/CollectionsOverview';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import CollectionPage from '../Collections/Collection';

import { fetchCollectionAsync } from '../../redux/shop/shop.action';
import withSpinner from '../../components/with-spinner/withSpinner';

const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const Shop = ({ fetchCollectionAsync, match, isCollectionLoading }) => {
  useEffect(() => {
    fetchCollectionAsync();
  }, [fetchCollectionAsync]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner
            {...props}
            isLoading={isCollectionLoading}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            {...props}
            isLoading={isCollectionLoading}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionLoading: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionAsync: () => dispatch(fetchCollectionAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
