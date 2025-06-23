import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import WebHeader from './WebHeader'; // Import WebHeader

// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)

const PublicCreatorProfileScreen = ({ navigation, route }) => {
  const profileData = {
    name: 'Ethan Carter',
    username: '@ethan_carter',
    bio: 'Producer | Photographer | Songwriter',
    profileImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60',
    tags: ['🎧 Producer', '📸 Photographer', '🎵 Songwriter'],
    description: 'Ethan Carter is a multi-talented creative based in Los Angeles, specializing in music production, photography, and songwriting. Open for collaborations and commissioned work.',
    stats: {
      followers: '1.2K',
      gigsCompleted: '50',
      rating: '4.8',
    },
    services: [
      { name: 'Beat Production', rate: '₦50,000/track' },
      { name: 'Event Photography', rate: '₦25,000/hr' },
      { name: 'Songwriting Consultation', rate: '₦30,000/session' },
    ],
    featuredWork: [
      { id: 'fw1', title: 'Summer Vibes EP', imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=150&q=60' },
      { id: 'fw2', title: 'Urban Portraits', imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=150&q=60' },
      { id: 'fw3', title: 'Lofi Beats Vol. 3', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=150&q=60' },
    ],
  };

  // const handleBack = () => navigation.goBack(); // WebHeader might handle global back, or specific back for profile context
  const handleShare = () => console.log("Share action");
  const handleFollow = () => console.log("Follow action");
  const handleTip = () => navigation.navigate('TipCreatorModal', { creatorId: profileData.username, creatorName: profileData.name });
  const handleBookNow = (serviceName = "General Consultation", serviceRate = "N/A") => {
    navigation.navigate('BookingModal', {
      gigTitle: serviceName,
      creatorName: profileData.name,
      price: serviceRate.startsWith('₦') ? parseFloat(serviceRate.replace('₦','').replace(',','')) : undefined
    });
  };
  const handleContact = () => navigation.navigate('Messages', { screen: 'Chat', params: { userId: profileData.username, userName: profileData.name } });

  return (
    <View className="flex-1 bg-primary">
      <WebHeader />
      {/* The screen specific header with back and share is removed, WebHeader provides general nav.
          If specific share functionality for this profile is needed, it can be added into the content area.
      */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Profile specific header info (like name) could go here if not in WebHeader */}
         <View className="p-4 items-center bg-gray-800 md:hidden"> {/* Mobile specific header bar below WebHeader */}
            <Text className="text-white text-xl font-bold">{profileData.name}'s Profile</Text>
        </View>


        <View className="items-center p-4 md:p-6">
          <Image
            source={{ uri: profileData.profileImageUrl }}
            className="w-32 h-32 rounded-full mb-4 border-2 border-accent"
          />
          <Text className="text-white text-2xl font-bold">{profileData.name}</Text>
          <Text className="text-gray-400 text-base mb-1">{profileData.username}</Text>
          <Text className="text-gray-300 text-center text-sm mb-3">{profileData.bio}</Text>

          <View className="flex-row flex-wrap justify-center mb-4">
            {profileData.tags.map(tag => (
              <View key={tag} className="bg-gray-700 rounded-full px-3 py-1 m-1">
                <Text className="text-accent text-xs font-semibold">{tag}</Text>
              </View>
            ))}
          </View>

          <Text className="text-gray-300 text-sm text-center mb-6 mx-4 md:max-w-xl">{profileData.description}</Text>

          <View className="flex-row justify-around w-full max-w-md bg-gray-800 p-3 rounded-lg mb-6">
            <View className="items-center px-2">
              <Text className="text-white text-lg font-bold">{profileData.stats.followers}</Text>
              <Text className="text-gray-400 text-xs">Followers</Text>
            </View>
            <View className="items-center px-2">
              <Text className="text-white text-lg font-bold">{profileData.stats.gigsCompleted}</Text>
              <Text className="text-gray-400 text-xs text-center">Gigs Completed</Text>
            </View>
            <View className="items-center px-2">
              <Text className="text-white text-lg font-bold">⭐ {profileData.stats.rating}</Text>
              <Text className="text-gray-400 text-xs">Rating</Text>
            </View>
          </View>

          <View className="flex-col sm:flex-row justify-center w-full max-w-md mb-4">
            <TouchableOpacity onPress={handleFollow} className="bg-accent flex-1 rounded-full py-3 px-4 mx-1 mb-2 sm:mb-0">
              <Text className="text-primary font-bold text-center text-sm">Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleContact} className="bg-gray-700 flex-1 border border-accent rounded-full py-3 px-4 mx-1">
              <Text className="text-accent font-bold text-center text-sm">Message</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => handleBookNow()} className="bg-accent w-full max-w-md rounded-full py-3 px-6 mb-3">
            <Text className="text-primary font-bold text-center text-lg">Book Creator</Text>
          </TouchableOpacity>
           <TouchableOpacity onPress={handleTip} className="border border-accent w-full max-w-md rounded-full py-3 px-6 mb-6">
            <Text className="text-accent font-bold text-center text-lg">Send Tip</Text>
          </TouchableOpacity>

          <View className="w-full max-w-md mb-6">
            <Text className="text-white text-xl font-semibold mb-3">Services & Rates</Text>
            {profileData.services.map(service => (
              <View key={service.name} className="bg-gray-800 p-3 rounded-lg mb-2">
                <View className="flex-row justify-between items-center mb-1">
                    <Text className="text-gray-300 flex-shrink mr-2">{service.name}</Text>
                    <Text className="text-accent font-semibold">{service.rate}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => handleBookNow(service.name, service.rate)}
                    className="bg-accent/20 border border-accent rounded-md py-1 px-3 mt-1 self-start">
                    <Text className="text-accent text-xs">Book this service</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View className="w-full mb-6">
            <Text className="text-white text-xl font-semibold mb-3 px-4 md:px-0">Featured Work</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 4, paddingLeft:10 }}>
              {profileData.featuredWork.map(item => (
                <TouchableOpacity key={item.id} className="mr-3 w-32 sm:w-36">
                  <Image source={{ uri: item.imageUrl }} className="w-full h-32 sm:h-36 rounded-lg mb-1" />
                  <Text className="text-gray-300 text-xs text-center truncate">{item.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PublicCreatorProfileScreen;
