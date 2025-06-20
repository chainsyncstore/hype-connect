import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ApiService from './services/api';

const GigsMarketplaceScreen = () => {
  const navigation = useNavigation();
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Music Production',
    'Photography',
    'Videography',
    'Graphic Design',
    'Voice Over',
    'Writing',
  ];

  useEffect(() => {
    loadGigs();
  }, [selectedCategory, searchQuery]);

  const loadGigs = async () => {
    try {
      setLoading(true);
      const filters = {
        ...(selectedCategory !== 'All' && { category: selectedCategory }),
        ...(searchQuery && { search: searchQuery }),
      };
      const response = await ApiService.getGigs(filters);
      setGigs(response.data || []);
    } catch (error) {
      console.error('Failed to load gigs:', error);
      // Mock data for demo
      setGigs([
        {
          id: 1,
          title: 'Professional Beat Production',
          description: 'Custom beats for your next hit song',
          price: 50000,
          creator: {
            name: 'Beat Maker Pro',
            avatar: 'https://via.placeholder.com/50',
            rating: 4.9,
          },
          category: 'Music Production',
          deliveryTime: '3 days',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 2,
          title: 'Event Photography Package',
          description: 'Professional event photography with editing',
          price: 75000,
          creator: {
            name: 'Lens Master',
            avatar: 'https://via.placeholder.com/50',
            rating: 4.8,
          },
          category: 'Photography',
          deliveryTime: '1 week',
          image: 'https://via.placeholder.com/300x200',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const renderGigCard = ({ item }) => (
    <TouchableOpacity
      style={styles.gigCard}
      onPress={() => navigation.navigate('GigDetail', { gig: item })}
    >
      <Image source={{ uri: item.image }} style={styles.gigImage} />
      <View style={styles.gigInfo}>
        <Text style={styles.gigTitle}>{item.title}</Text>
        <Text style={styles.gigDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <View style={styles.creatorInfo}>
          <Image source={{ uri: item.creator.avatar }} style={styles.avatar} />
          <View style={styles.creatorDetails}>
            <Text style={styles.creatorName}>{item.creator.name}</Text>
            <Text style={styles.rating}>⭐ {item.creator.rating}</Text>
          </View>
        </View>
        <View style={styles.gigFooter}>
          <Text style={styles.price}>₦{item.price.toLocaleString()}</Text>
          <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryFilter = category => (
    <TouchableOpacity
      key={category}
      style={[
        styles.categoryButton,
        selectedCategory === category && styles.selectedCategory,
      ]}
      onPress={() => setSelectedCategory(category)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === category && styles.selectedCategoryText,
        ]}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Gigs Marketplace</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateGig')}>
          <Text style={styles.createButton}>+ Create</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search gigs..."
          placeholderTextColor="#c0b29b"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map(renderCategoryFilter)}
      </ScrollView>

      <FlatList
        data={gigs}
        renderItem={renderGigCard}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.gigsGrid}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  createButton: {
    fontSize: 16,
    color: '#F5A623',
    fontWeight: 'bold',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: '#2A2A2A',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    color: '#FFFFFF',
    fontSize: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedCategory: {
    backgroundColor: '#F5A623',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  selectedCategoryText: {
    color: '#1B1B1E',
    fontWeight: 'bold',
  },
  gigsGrid: {
    paddingHorizontal: 10,
  },
  gigCard: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    borderRadius: 15,
    margin: 10,
    overflow: 'hidden',
  },
  gigImage: {
    width: '100%',
    height: 120,
  },
  gigInfo: {
    padding: 15,
  },
  gigTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  gigDescription: {
    fontSize: 14,
    color: '#c0b29b',
    marginBottom: 10,
  },
  creatorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  creatorDetails: {
    flex: 1,
  },
  creatorName: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  rating: {
    fontSize: 12,
    color: '#F5A623',
  },
  gigFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F5A623',
  },
  deliveryTime: {
    fontSize: 12,
    color: '#c0b29b',
  },
});

export default GigsMarketplaceScreen;
