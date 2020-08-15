import React from 'react';
import './Collection.scss';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className='collection'>
      <h2>category page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
