import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const CreatorCard = () => {
  console.log('CreatorCard rendered');

  useEffect(() => {
    console.log('CreatorCard mounted');

    return () => {
      console.log('CreatorCard unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <TouchableOpacity style={styles.closeButton}>
            <View style={styles.closeButtonLine} />
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
                <Text style={styles.profileName} selectable={true}>Ethan Carter</Text>
                <Text style={styles.profileUsername} selectable={true}>@ethan.carter</Text>
                <Text style={styles.profileTitle} selectable={true}>Photographer</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(20, 20, 20, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  card: {
    backgroundColor: '#1f1b14',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  closeButtonLine: {
    height: 2,
    width: 36,
    borderRadius: 1,
    backgroundColor: '#5e513b',
  },
  content: {
    padding: 16,
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
