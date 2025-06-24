import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import WebHeader from '../../components/WebHeader'; // Commented out as it does not exist

// Ensure these are defined only once in the module scope
const placeholderGigImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60';
const placeholderAvatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=50&q=60';

const GigsMarketplaceScreen = ({ navigation: propNavigation }) => {
  // Fallback to nativeNavigation if propNavigation is not passed (e.g. if not used in a higher-order navigator)
  const nativeNavigation = useNavigation();
  const navigation = propNavigation || nativeNavigation;

  const [gigs, setGigs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 'Music Production', 'Photography', 'Videography', 'Graphic Design', 'Voice Over', 'Writing',
  ];

  useEffect(() => {
    // This mockGigs array should be carefully checked for syntax if errors persist.
    // The structure here appears correct based on typical JavaScript object array syntax.
    const mockGigs = [
      {
        id: '1',
        title: 'Professional Beat Production',
        description: 'Custom beats for your next hit song. Trap, Hip-Hop, Lofi.',
        price: 50000,
        creator: { name: 'Beat Maker Pro', avatar: placeholderAvatar, rating: 4.9 },
        category: 'Music Production', 
        deliveryTime: '3 days', 
        image: placeholderGigImage,
      },
      {
        id: '2',
        title: 'Event Photography Package',
        description: 'Capture your special moments with stunning event photography.',
        price: 75000,
        creator: { name: 'Lens Master', avatar: placeholderAvatar, rating: 4.8 },
        category: 'Photography', 
        deliveryTime: '1 week', 
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV2ZW50JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60',
      },
      {
        id: '3',
        title: 'Logo Design & Branding',
        description: 'Modern and unique logo design for your brand identity.',
        price: 30000,
        creator: { name: 'DesignGuru', avatar: placeholderAvatar, rating: 4.7 },
        category: 'Graphic Design', 
        deliveryTime: '5 days', 
        image: 'https://images.unsplash.com/photo-1607298799009-a47ab5ee4592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nbyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60',
      },
      {
        id: '4',
        title: 'Video Editing Services',
        description: 'Professional video editing for YouTube, promos, and more.',
        price: 60000,
        creator: { name: 'VideoWiz', avatar: placeholderAvatar, rating: 4.9 },
        category: 'Videography', 
        deliveryTime: '4 days', 
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZGVvJTIwZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60',
      },
    ];

    let filteredGigs = mockGigs;
    if (selectedCategory !== 'All') {
      filteredGigs = mockGigs.filter(gig => gig.category === selectedCategory);
    }
    if (searchQuery) {
      filteredGigs = filteredGigs.filter(gig => gig.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    setGigs(filteredGigs);
  }, [selectedCategory, searchQuery]);

  const handleBookGig = (item) => {
    navigation.navigate('BookingModal', {
      gigTitle: item.title,
      creatorName: item.creator.name,
      price: item.price
    });
  };

  const GigCard = ({ item }) => (
    <View className="flex-1 bg-gray-800 rounded-xl m-2 overflow-hidden max-w-sm">
      <TouchableOpacity onPress={() => navigation.navigate('GigDetail', { gigId: item.id })} >
        <Image source={{ uri: item.image }} className="w-full h-40" resizeMode="cover" />
        <View className="p-3">
          <Text className="text-white text-md font-bold mb-1 truncate" numberOfLines={1}>{item.title}</Text>
          <Text className="text-gray-400 text-xs mb-2 h-8" numberOfLines={2}>{item.description}</Text>
          <View className="flex-row items-center mb-2">
            <Image source={{ uri: item.creator.avatar }} className="w-5 h-5 rounded-full mr-1.5" />
            <View>
              <Text className="text-gray-300 text-xs">{item.creator.name}</Text>
              <Text className="text-accent text-xs">⭐ {item.creator.rating}</Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center mt-1">
            <Text className="text-accent text-md font-semibold">₦{item.price.toLocaleString()}</Text>
            <Text className="text-gray-400 text-xs">{item.deliveryTime}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleBookGig(item)}
        className="bg-accent py-2 mt-1">
        <Text className="text-primary text-center font-semibold text-sm">Book Gig</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-primary">
      {/* <WebHeader /> */}{/* WebHeader usage commented out */}
      <View className="px-4 pt-4 pb-2 bg-primary">
        {/* This header was from the version of the code I refactored. */}
        {/* If your original GigsMarketplaceScreen had a different header, that would go here. */}
        {/* For now, ensuring there's no conflict with the (now absent) WebHeader. */}
        <View className="flex-row justify-between items-center mb-3 pt-10"> {/* Added pt-10 for status bar spacing if no WebHeader */} 
            <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
                <Text className="text-white text-2xl">‹</Text>
            </TouchableOpacity>
            <Text className="text-white text-xl font-bold">Gigs Marketplace</Text>
            <TouchableOpacity onPress={() => navigation.navigate('GigCreationModal')} className="p-1">
                <Text className="text-accent text-2xl">+</Text>
            </TouchableOpacity>
        </View>

        <TextInput
            className="bg-gray-700 text-white rounded-full px-5 py-3 text-sm"
            placeholder="Search gigs (e.g., beat, logo)"
            placeholderTextColor="#A0A0A0"
            value={searchQuery}
            onChangeText={setSearchQuery}
        />
      </View>

      <View className="mb-4 pt-2">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12 }}>
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              className={`px-4 py-2 rounded-full mr-2 ${selectedCategory === category ? 'bg-accent' : 'bg-gray-700'}`}
              onPress={() => setSelectedCategory(category)}
            >
              <Text className={`${selectedCategory === category ? 'text-primary' : 'text-white'} text-xs font-medium`}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={gigs}
        renderItem={({item}) => <GigCard item={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text className="text-gray-400 text-center mt-10">No gigs found.</Text>}
        className="flex-1"
      />
    </View>
  );
};

export default GigsMarketplaceScreen;