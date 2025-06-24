import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import WebHeader from '../../components/WebHeader';

const dummyData = [
  // ... (dummy data for the feed)
];

export default function SearchFeedScreen() {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(dummyData);

  const handleSearch = (text) => {
    setSearchText(text);
    const newData = dummyData.filter(item => {
      const itemData = item.username.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };

  return (
    <View className="flex-1 bg-primary">
      <WebHeader />
      <TextInput
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchText}
        className="p-2 border border-gray-400 m-2 text-white rounded-md"
        placeholderTextColor="#A0A0A0"
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View className="p-2 border-b border-gray-300">
            <Text className="text-white">{item.username}</Text>
            <Image source={{ uri: item.avatar }} className="w-12 h-12" />
            {/* Add more content here */}
          </View>
        )}
      />
    </View>
  );
}
