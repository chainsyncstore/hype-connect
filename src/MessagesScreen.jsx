import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native'; // Removed ScrollView as FlatList handles scroll
import { useNavigation } from '@react-navigation/native';
import WebHeader from './WebHeader'; // Import WebHeader

// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)
const placeholderAvatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=50&q=60';

const MessagesScreen = () => {
  const navigation = useNavigation();
  const [conversations, setConversations] = useState([
    { id: '1', user: { name: 'Beat Maker Pro', avatar: placeholderAvatar, online: true }, lastMessage: 'Thanks for the collaboration! The track sounds amazing.', timestamp: '10:30 AM', unreadCount: 2 },
    { id: '2', user: { name: 'Visual Artist', avatar: placeholderAvatar, online: false }, lastMessage: 'When can we start the project? Let me know your availability.', timestamp: 'Yesterday', unreadCount: 0 },
    { id: '3', user: { name: 'DJ Hype', avatar: placeholderAvatar, online: true }, lastMessage: 'Next gig is on Friday, you in?', timestamp: '2 days ago', unreadCount: 1 },
  ]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedConversation) {
      setMessages([
        { id: 'm1', text: 'Hey! I love your music style. Want to collaborate?', sender: 'other', timestamp: '10:00 AM' },
        { id: 'm2', text: 'Absolutely! What did you have in mind?', sender: 'me', timestamp: '10:05 AM' },
        { id: 'm3', text: 'I need a beat for my new track. Can you help with that?', sender: 'other', timestamp: '10:15 AM' },
        { id: 'm4', text: 'Sure! My rate is ₦50,000 for a custom beat. Deal?', sender: 'me', timestamp: '10:20 AM' },
        { id: 'm5', text: "Perfect! Let's do it. Thanks for the collaboration!", sender: 'other', timestamp: '10:30 AM' },
      ]);
    } else {
      setMessages([]);
    }
  }, [selectedConversation]);

  const handleSendMessage = () => {
    alert("Message Sent (Demo)!");
  };

  const ConversationItem = ({ item, onPress, isSelected }) => (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row p-3 border-b border-gray-700 items-center ${isSelected ? 'bg-gray-700' : ''}`} // Removed redundant bg-gray-800
    >
      <View className="relative mr-3">
        <Image source={{ uri: item.user.avatar }} className="w-12 h-12 rounded-full" />
        {item.user.online && <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800" />}
      </View>
      <View className="flex-1">
        <View className="flex-row justify-between items-center mb-0.5">
          <Text className="text-white font-semibold text-sm">{item.user.name}</Text>
          <Text className="text-gray-400 text-xs">{item.timestamp}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-400 text-xs flex-1" numberOfLines={1}>{item.lastMessage}</Text>
          {item.unreadCount > 0 && (
            <View className="bg-accent rounded-full w-5 h-5 justify-center items-center ml-2">
              <Text className="text-primary text-xs font-bold">{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  const MessageBubble = ({ item }) => (
    <View className={`my-1 flex-row ${item.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
      <View className={`max-w-[70%] p-2.5 rounded-xl ${item.sender === 'me' ? 'bg-accent rounded-br-none' : 'bg-gray-700 rounded-bl-none'}`}>
        <Text className={`text-xs ${item.sender === 'me' ? 'text-primary' : 'text-white'}`}>{item.text}</Text>
        <Text className={`text-[10px] mt-1 ${item.sender === 'me' ? 'text-primary/70' : 'text-gray-400'} text-right`}>{item.timestamp}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-primary">
      <WebHeader />
      <View className="flex-1 md:flex-row" style={{ height: 'calc(100vh - YOUR_WEBHEADER_HEIGHT)' }}>
        {/* Adjust YOUR_WEBHEADER_HEIGHT based on actual WebHeader height, e.g., 60px or use flexbox correctly */}

        {/* Conversations List (Left Panel on Desktop) */}
        {/* Conditional rendering for mobile: show only list or only chat */}
        {/* On desktop (md+), show list if !selectedConversation or always show if layout allows */}
        <View className={`md:w-1/3 border-r border-gray-700 bg-gray-800 flex-col ${selectedConversation && 'hidden md:flex'} h-full`}>
          <View className="flex-row justify-between items-center px-4 py-3 border-b border-gray-700">
            {/* Back button for mobile when a chat is open, not needed if WebHeader handles all nav */}
             <TouchableOpacity onPress={() => navigation.goBack()} className="p-1 md:hidden">
              {/* This back button is for mobile view when a chat is NOT selected, to go back from Messages screen itself */}
              {/* Or, if WebHeader is the primary nav, this might not be needed here. */}
            </TouchableOpacity>
            <Text className="text-white text-lg font-bold">Messages</Text>
            <TouchableOpacity onPress={() => alert("New Message (Demo)")} className="p-1">
              <Text className="text-accent text-xl">✏️</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={conversations}
            renderItem={({ item }) => (
              <ConversationItem
                item={item}
                onPress={() => setSelectedConversation(item)}
                isSelected={selectedConversation?.id === item.id}
              />
            )}
            keyExtractor={item => item.id}
            className="flex-1" // Ensures FlatList takes up available space in its flex container
          />
        </View>

        {/* Chat View (Right Panel on Desktop) */}
        {selectedConversation ? (
          <View className="flex-1 md:w-2/3 flex flex-col bg-gray-800 h-full">
            <View className="flex-row items-center px-4 py-3 bg-gray-900 border-b border-gray-700">
              <TouchableOpacity onPress={() => setSelectedConversation(null)} className="p-1 mr-2 md:hidden">
                <Text className="text-white text-2xl">‹</Text>
              </TouchableOpacity>
              <Image source={{ uri: selectedConversation.user.avatar }} className="w-8 h-8 rounded-full mr-2.5" />
              <View className="flex-1">
                <Text className="text-white font-semibold text-sm">{selectedConversation.user.name}</Text>
                <Text className="text-gray-400 text-xs">{selectedConversation.user.online ? 'Online' : 'Offline'}</Text>
              </View>
              <TouchableOpacity onPress={() => alert("Call (Demo)")} className="p-1">
                <Text className="text-accent text-xl">📞</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={messages}
              renderItem={MessageBubble}
              keyExtractor={item => item.id}
              className="flex-1 p-3" // Ensures this FlatList takes up space
              contentContainerStyle={{ paddingBottom: 5 }}
              inverted
            />

            <View className="flex-row items-center p-3 border-t border-gray-700 bg-gray-900">
              <TextInput
                className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 text-sm mr-2"
                placeholder="Type a message..."
                placeholderTextColor="#A0A0A0"
                multiline
              />
              <TouchableOpacity onPress={handleSendMessage} className="bg-accent rounded-full p-2.5">
                <Text className="text-primary font-semibold text-sm">Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View className="hidden md:flex md:w-2/3 flex-1 items-center justify-center bg-gray-800 h-full">
            <Text className="text-gray-400 text-lg">Select a conversation to start chatting.</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default MessagesScreen;
