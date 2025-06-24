import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

// This version assumes the modal is controlled by a parent component via the 'visible' and 'onClose' props,
// and that the content of the first definition was the intended UI.
const CreatorCard = ({ visible, onClose }) => { 
  // The useEffect from the original first definition was empty; 
  // if it had a purpose, that logic would need to be re-integrated here.
  // useEffect(() => {
  //   return () => {};
  // }, []);

  if (!visible) {
    return null; // Don't render anything if not visible
  }

  return (
    <View style={styles.modalOverlay}> {/* Use modalOverlay for the full screen dark background */}
      <TouchableOpacity style={styles.overlayTouchable} onPress={onClose} activeOpacity={1} />
      <View style={styles.card}>
        {/* Close button inside the card or part of header if card had one */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>✕</Text> 
        </TouchableOpacity>
        
        <View style={styles.content}>
          <View style={styles.profileContainer}>
            <Image
              style={styles.profileImage}
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0uYL3YKnhwxXy83LDiqc0IGga8yBa0gbCpiquDaH4woJQLEAFMIhNgFAXerkwhhmBCMrNkOOeOasSPt1EAvMR6XzGOfxu8HCq-etC2AwGy0kL79J0CnIUkiy7LUMkJCPSM9P2jlkKJJmKibjv1G_HQ80kC734X78FzGP1ukojMlbP0AYWYLNBPKFAgNTT9lbCN9_1yeMY40-8JyA4L6gLshMvhE8PhF0JwZc-0WmA31vzUupJpgyJNsiwc9tmP8iL7gOA5Bzgi-8',
              }}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>Ethan Carter</Text>
              <Text style={styles.profileUsername}>@ethan.carter</Text>
              <Text style={styles.profileTitle}>Photographer</Text>
            </View>
          </View>
          <View style={styles.interestsContainer}>
            <View style={styles.interestButton}>
              <Text style={styles.interestButtonText}>Photographer</Text>
            </View>
            <View style={styles.interestButton}>
              <Text style={styles.interestButtonText}>Videographer</Text>
            </View>
            <View style={styles.interestButton}>
              <Text style={styles.interestButtonText}>Content Creator</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: { // This style is for the full-screen semi-transparent background
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
    justifyContent: 'center', // Or 'flex-end' if you want it at the bottom
    alignItems: 'center',
  },
  overlayTouchable: { // Invisible touchable to close when clicking outside the card
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  card: { // Styles for the actual modal content card
    backgroundColor: '#1f1b14',
    borderRadius: 20, // Rounded corners for the card itself
    padding: 16, // Overall padding for the card content area
    width: '90%', // Example width, adjust as needed
    maxWidth: 500, // Max width for larger screens
    // Add elevation or shadow for web if desired
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end', // Position to the right
    padding: 8, // Make it easier to tap
    marginBottom: 0, // Adjust spacing if needed
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    // No padding here if card already has padding, or adjust as needed
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileUsername: {
    color: '#c0b29b',
    fontSize: 16,
  },
  profileTitle: {
    color: '#c0b29b',
    fontSize: 16,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  interestButton: {
    backgroundColor: '#423929',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  interestButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CreatorCard;