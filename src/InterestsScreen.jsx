import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const InterestsScreen = () => {
  const navigation = useNavigation();
  const interests = [
    'Music Production',
    'Videography',
    'Fashion',
    'Editing',
    'Graphic Design',
    'Photography',
    'Illustration',
    'Animation',
    'Writing',
    'Content Creation',
    'Social Media',
    'Marketing',
    'Vocalist',
    'Performance',
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Interests</Text>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressDot} />
          <View style={styles.progressDotActive} />
          <View style={styles.progressDot} />
        </View>

        <Text style={styles.title}>What are your creative interests?</Text>
        <Text style={styles.subtitle}>
          Select all that apply to help us tailor your experience.
        </Text>

        <View style={styles.interestsContainer}>
          {interests.map((interest, index) => (
            <TouchableOpacity key={index} style={styles.interestButton}>
              <Text style={styles.interestButtonText}>{interest}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Success')}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201b13',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#201b13',
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '100%',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#5f513a',
    marginHorizontal: 4,
  },
  progressDotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#eedcbd',
    marginHorizontal: 4,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  interestButton: {
    backgroundColor: '#423929',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  interestButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: '#eedcbd',
    borderRadius: 100,
    paddingVertical: 14,
    paddingHorizontal: 48,
    marginTop: 32,
  },
  continueButtonText: {
    color: '#201b13',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomSpace: {
    height: 5,
    backgroundColor: '#201b13',
  },
});

export default InterestsScreen;
