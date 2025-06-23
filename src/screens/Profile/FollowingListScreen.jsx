import React from 'react';
import FollowersListScreen from './FollowersListScreen';

const FollowingListScreen = () => {
  // Simply reuses the existing component and filters externally
  // You could move the filtering logic to props if needed
  return <FollowersListScreen mode="following" />;
};

export default FollowingListScreen;