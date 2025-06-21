import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import ApiService from './services/api';

const MessagesScreen = ({ navigation }) => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
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
      // Mock data for demo
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

  const loadMessages = async (conversationId) => {
    try {
      const data = await ApiService.getMessages(conversationId);
      setMessages(data);
    } catch (error) {
      console.error('Failed to load messages:', error);
      // Mock data for demo
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
      setMessages((prev) => [...prev, message]);
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

  if (!selectedConversation) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
          keyExtractor={(item) => item.id.toString()}
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
        keyExtractor={(item) => item.id.toString()}
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
  backButton: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  newMessageButton: {
    fontSize: 20,
    color: '#F5A623',
  },
  conversationsList: {
    flex: 1,
  },
  conversationItem: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  selectedConversation: {
    backgroundColor: '#2A2A2A',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#1B1B1E',
  },
  conversationInfo: {
    flex: 1,
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  timestamp: {
    fontSize: 12,
    color: '#c0b29b',
  },
  conversationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    fontSize: 14,
    color: '#c0b29b',
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: '#F5A623',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  unreadCount: {
    fontSize: 12,
    color: '#1B1B1E',
    fontWeight: 'bold',
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  chatUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 15,
  },
  chatAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  chatUserName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  onlineStatus: {
    fontSize: 12,
    color: '#c0b29b',
  },
  callButton: {
    fontSize: 20,
    color: '#F5A623',
  },
  messagesList: {
    flex: 1,
  },
  messagesContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 5,
    padding: 12,
    borderRadius: 15,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#F5A623',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#2A2A2A',
  },
  messageText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  messageTime: {
    fontSize: 10,
    color: '#c0b29b',
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  messageInput: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#FFFFFF',
    fontSize: 16,
    maxHeight: 100,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#F5A623',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: '#1B1B1E',
    fontWeight: 'bold',
  },
});

export default MessagesScreen;
