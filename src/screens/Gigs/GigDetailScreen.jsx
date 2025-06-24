import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import WebHeader from '../../components/WebHeader';

// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)
const placeholderGigImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
const placeholderAvatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=50&q=60';


const GigDetailScreen = () => {
  const router = useRouter();
  const { gigId } = useLocalSearchParams();

  // Static gig data - in a real app, you'd fetch this based on gigId
  const gigData = {
    id: gigId,
    title: 'Custom Trap Beats for Your Next Hit',
    category: 'Music Production',
    description: "Looking for fire trap beats that will make your track stand out? I'll produce a high-quality, original trap beat tailored to your style and requirements. Includes mixing and mastering of the beat. Let's make some bangers!",
    price: 75000, // Naira
    deliveryTime: '5 days',
    revisions: 2,
    creator: {
      name: 'TrapGod Beats',
      username: '@trap_god',
      avatar: placeholderAvatar,
      rating: 4.9,
      gigsCompleted: 120,
    },
    tags: ['Trap', 'Hip-Hop', 'Beat Production', 'Custom Beats', 'Music Producer'],
    portfolioImages: [
      placeholderGigImage,
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    ],
    faq: [
        { q: "What software do you use?", a: "I primarily use FL Studio, Ableton Live, and a range of industry-standard VST plugins." },
        { q: "Can I get the track stems?", a: "Yes, track stems can be provided for an additional fee. Please message me to discuss." },
    ]
  };

  const handleBookNow = () => {
    router.push({
      pathname: '/(modals)/book-now',
      params: {
        gigTitle: gigData.title,
        creatorName: gigData.creator.name,
        price: gigData.price
      }
    });
  };

  const navigateToCreatorProfile = () => {
    router.push({ pathname: '/(tabs)/profile/[userId]', params: { userId: gigData.creator.username } });
  }

  return (
    <View className="flex-1 bg-primary">
      <WebHeader />
      <ScrollView>
        <View className="p-4 md:p-6">
          {/* Gig Image/Video Placeholder */}
          <Image source={{ uri: gigData.portfolioImages[0] }} className="w-full h-64 md:h-80 rounded-lg mb-4 bg-gray-700" resizeMode="cover" />

          <Text className="text-gray-400 text-xs uppercase mb-1">{gigData.category}</Text>
          <Text className="text-white text-2xl md:text-3xl font-bold mb-3">{gigData.title}</Text>

          {/* Creator Info */}
          <TouchableOpacity onPress={navigateToCreatorProfile} className="flex-row items-center mb-4 p-2 bg-gray-800 rounded-lg -ml-2">
            <Image source={{ uri: gigData.creator.avatar }} className="w-10 h-10 rounded-full mr-3" />
            <View>
              <Text className="text-white font-semibold">{gigData.creator.name}</Text>
              <Text className="text-accent text-xs">⭐ {gigData.creator.rating} ({gigData.creator.gigsCompleted} gigs)</Text>
            </View>
          </TouchableOpacity>

          {/* Gig Price and Delivery */}
          <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-white text-lg font-semibold">Price</Text>
              <Text className="text-accent text-2xl font-bold">₦{gigData.price.toLocaleString()}</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-300 text-sm">Delivery Time</Text>
              <Text className="text-white text-sm">{gigData.deliveryTime}</Text>
            </View>
             <View className="flex-row justify-between items-center mt-1">
              <Text className="text-gray-300 text-sm">Revisions</Text>
              <Text className="text-white text-sm">{gigData.revisions}</Text>
            </View>
          </View>

          {/* Book Now Button */}
          <TouchableOpacity
            onPress={handleBookNow}
            className="bg-accent rounded-full py-3.5 px-6 mb-6 w-full items-center"
          >
            <Text className="text-primary font-bold text-center text-md">Book Now (₦{gigData.price.toLocaleString()})</Text>
          </TouchableOpacity>

          {/* Description */}
          <Text className="text-white text-lg font-semibold mb-2">About this Gig</Text>
          <Text className="text-gray-300 text-sm leading-relaxed mb-6">{gigData.description}</Text>

          {/* Tags */}
          <Text className="text-white text-lg font-semibold mb-2">Tags</Text>
          <View className="flex-row flex-wrap mb-6">
            {gigData.tags.map(tag => (
              <View key={tag} className="bg-gray-700 rounded-full px-3 py-1 m-1">
                <Text className="text-accent text-xs font-semibold">{tag}</Text>
              </View>
            ))}
          </View>

          {/* Portfolio/Gallery */}
          <Text className="text-white text-lg font-semibold mb-2">Portfolio</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6 -mx-4 px-4">
            {gigData.portfolioImages.map((imgUri, index) => (
              <Image key={index} source={{uri: imgUri}} className="w-32 h-32 bg-gray-700 rounded-md mr-2" resizeMode="cover"/>
            ))}
          </ScrollView>

          {/* FAQ */}
          <Text className="text-white text-lg font-semibold mb-2">Frequently Asked Questions</Text>
          <View className="mb-6">
            {gigData.faq.map((item, index) => (
                <View key={index} className="bg-gray-800 p-3 rounded-lg mb-2">
                    <Text className="text-accent font-medium text-sm mb-1">{item.q}</Text>
                    <Text className="text-gray-300 text-xs">{item.a}</Text>
                </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default GigDetailScreen;
