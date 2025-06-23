import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ApiService from './services/api';

const MessagesScreen = ({ route }) => {
  const navigation = useNavigation();
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(
    route?.params?.conversation || null
  );
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    loadConversations();
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      loadMessages(selectedConversation.id);
    }
  }, [selectedConversation]);

  const loadConversations = async () => {
    try {
      const data = await ApiService.getConversations();
      setConversations(data);
    } catch (error) {
      console.error('Failed to load conversations:', error);
      setConversations([
        {
          id: 1,
          user: {
            name: 'Beat Maker Pro',
            avatar: 'https://via.placeholder.com/50',
            online: true,
          },
          lastMessage: 'Thanks for the collaboration!',
          timestamp: '10:30 AM',
          unreadCount: 2,
        },
        {
          id: 2,
          user: {
            name: 'Visual Artist',
            avatar: 'https://via.placeholder.com/50',
            online: false,
          },
          lastMessage: 'When can we start the project?',
          timestamp: 'Yesterday',
          unreadCount: 0,
        },
        {
          id: 3,
          user: {
            name: 'Music Producer',
            avatar: 'https://via.placeholder.com/50',
            online: true,
          },
          lastMessage: 'The track sounds amazing!',
          timestamp: '2 days ago',
          unreadCount: 1,
        },
      ]);
    }
  };

  const loadMessages = async conversationId => {
    try {
      const data = await ApiService.getMessages(conversationId);
      setMessages(data);
    } catch (error) {
      console.error('Failed to load messages:', error);
      setMessages([
        {
          id: 1,
          text: 'Hey! I love your music style. Want to collaborate?',
          sender: 'other',
          timestamp: '10:00 AM',
        },
        {
          id: 2,
          text: 'Absolutely! What did you have in mind?',
          sender: 'me',
          timestamp: '10:05 AM',
        },
        {
          id: 3,
          text: 'I need a beat for my new track. Can you help?',
          sender: 'other',
          timestamp: '10:15 AM',
        },
        {
          id: 4,
          text: 'Sure! My rate is ₦50,000 for a custom beat. Deal?',
          sender: 'me',
          timestamp: '10:20 AM',
        },
        {
          id: 5,
          text: "Perfect! Let's do it. Thanks for the collaboration!",
          sender: 'other',
          timestamp: '10:30 AM',
        },
      ]);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation) return;

    try {
      await ApiService.sendMessage(selectedConversation.id, newMessage);
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages(prev => [...prev, message]);
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const renderConversation = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.conversationItem,
        selectedConversation?.id === item.id && styles.selectedConversation,
      ]}
      onPress={() => setSelectedConversation(item)}
    >
      <View style={styles.avatarContainer}>
        <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
        {item.user.online && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.conversationInfo}>
        <View style={styles.conversationHeader}>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <View style={styles.conversationFooter}>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
          {item.unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadCount}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'me' ? styles.myMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.timestamp}</Text>
    </View>
  );

  const handleBack = () => {
    if (selectedConversation) {
      setSelectedConversation(null);
    } else {
      navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home');
    }
  };

  if (!selectedConversation) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Messages</Text>
          <TouchableOpacity>
            <Text style={styles.newMessageButton}>✏️</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={conversations}
          renderItem={renderConversation}
          keyExtractor={item => item.id.toString()}
          style={styles.conversationsList}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.chatHeader}>
        <TouchableOpacity onPress={() => setSelectedConversation(null)}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <View style={styles.chatUserInfo}>
          <Image
            source={{ uri: selectedConversation.user.avatar }}
            style={styles.chatAvatar}
          />
          <View>
            <Text style={styles.chatUserName}>
              {selectedConversation.user.name}
            </Text>
            <Text style={styles.onlineStatus}>
              {selectedConversation.user.online ? 'Online' : 'Offline'}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.callButton}>📞</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id.toString()}
        style={styles.messagesList}
        contentContainerStyle={styles.messagesContent}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Type a message..."
          placeholderTextColor="#c0b29b"
          value={newMessage}
          onChangeText={setNewMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
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
  // Add remaining styles...
});

export default MessagesScreen;