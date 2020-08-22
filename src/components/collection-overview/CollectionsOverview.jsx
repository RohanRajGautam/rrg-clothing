import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionToPreview } from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/CollectionPreview';

import { CollectionOverview } from './collection-overview.styles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionOverview>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverview>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionToPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
