import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const SuccessScreen = () => {
  console.log('SuccessScreen is rendering');
  const navigation = useNavigation();
  console.log('SuccessScreen rendered');

  useEffect(() => {
    console.log('SuccessScreen mounted');

    return () => {
      console.log('SuccessScreen unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Hype!</Text>
      <Text style={styles.subtitle}>
        Your creative journey starts now. Explore the feed to connect with
        fellow artists and discover exciting opportunities.
      </Text>
      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => navigation.navigate('MainContent')}
      >
        <Text style={styles.exploreButtonText}>Explore the Feed</Text>
      </TouchableOpacity>
      <View style={styles.bottomSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221c11',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  exploreButton: {
    backgroundColor: '#eead3e',
    borderRadius: 100,
    paddingVertical: 14,
    paddingHorizontal: 48,
  },
  exploreButtonText: {
    color: '#221c11',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomSpace: {
    height: 5,
    backgroundColor: '#221c11',
  },
});

export default SuccessScreen;
