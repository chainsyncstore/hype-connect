import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)

const GigCreationModal = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [scope, setScope] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleCreateGig = () => {
    console.log('Creating Gig:', { title, description, category, price, scope, deadline });
    // In a real app, you'd handle image/video upload and API call here
    alert('Gig Created (Demo)!'); // Simple feedback for demo
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const InputField = ({ label, value, onChangeText, placeholder, keyboardType = 'default', multiline = false, numberOfLines = 1 }) => (
    <View className="mb-4">
      <Text className="text-gray-300 text-sm mb-1 ml-1">{label}</Text>
      <TextInput
        className={`bg-gray-700 text-white rounded-lg p-3 ${multiline ? 'h-24' : ''}`}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : 1}
        textAlignVertical={multiline ? "top" : "auto"}
      />
    </View>
  );

  return (
    <View className="flex-1 bg-primary p-4 pt-10">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-white text-2xl font-bold">Create New Gig</Text>
          <TouchableOpacity onPress={handleCancel}>
            <Text className="text-accent text-lg">Cancel</Text>
          </TouchableOpacity>
        </View>

        <InputField label="Gig Title" value={title} onChangeText={setTitle} placeholder="e.g., Custom Lofi Beats" />
        <InputField label="Description" value={description} onChangeText={setDescription} placeholder="Describe your service in detail..." multiline numberOfLines={4} />
        <InputField label="Category" value={category} onChangeText={setCategory} placeholder="e.g., Music Production, Photography" />
        <InputField label="Price/Budget (₦)" value={price} onChangeText={setPrice} placeholder="e.g., 50000" keyboardType="numeric" />
        <InputField label="Scope of Work" value={scope} onChangeText={setScope} placeholder="What's included? Revisions?" multiline numberOfLines={3} />
        <InputField label="Estimated Deadline" value={deadline} onChangeText={setDeadline} placeholder="e.g., 3 days, 1 week" />

        <View className="mb-6 mt-2">
          <Text className="text-gray-300 text-sm mb-1 ml-1">Cover Image/Media (Optional)</Text>
          <TouchableOpacity className="bg-gray-700 border border-dashed border-accent rounded-lg p-6 items-center justify-center">
            <Text className="text-accent text-lg mb-1">🖼️ 🎬</Text>
            <Text className="text-accent">Upload Files</Text>
            <Text className="text-gray-400 text-xs mt-1">(Feature upcoming)</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="bg-accent py-3 rounded-full mb-10"
          onPress={handleCreateGig}
        >
          <Text className="text-primary font-bold text-center text-lg">Create Gig</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default GigCreationModal;
