import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';

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
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchText}
        style={{ padding: 10, borderWidth: 1, borderColor: 'gray', margin: 10 }}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text>{item.username}</Text>
            <Image source={{ uri: item.avatar }} style={{ width: 50, height: 50 }} />
            {/* Add more content here */}
          </View>
        )}
      />
    </View>
  );
}