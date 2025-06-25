import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import ApiService from '@services/api';

const LiveStreamScreen = ({ navigation }) => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamTitle, setStreamTitle] = useState('');
  const [viewers, setViewers] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [tips, setTips] = useState([]);
  const [showTipModal, setShowTipModal] = useState(false);
  const [tipAmount, setTipAmount] = useState('');
  const [totalEarnings, setTotalEarnings] = useState(0);

  useEffect(() => {
    // Mock real-time updates
    const interval = setInterval(() => {
      if (isStreaming) {
        setViewers((prev) => prev + Math.floor(Math.random() * 3) - 1);
        // Simulate incoming tips and comments
        if (Math.random() > 0.7) {
          const mockTip = {
            id: Date.now(),
            user: 'Anonymous',
            amount: Math.floor(Math.random() * 5000) + 500,
            timestamp: new Date(),
          };
          setTips((prev) => [mockTip, ...prev]);
          setTotalEarnings((prev) => prev + mockTip.amount);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isStreaming]);

  const startStream = async () => {
    if (!streamTitle.trim()) {
      Alert.alert('Error', 'Please enter a stream title');
      return;
    }

    try {
      await ApiService.startLiveStream({ title: streamTitle });
      setIsStreaming(true);
      setViewers(1);
      Alert.alert('Success', 'Live stream started!');
    } catch (error) {
      console.error('Failed to start stream:', error);
      setIsStreaming(true); // Mock success
      setViewers(1);
    }
  };

  const endStream = async () => {
    try {
      await ApiService.endLiveStream('mock-stream-id');
      setIsStreaming(false);
      setViewers(0);
      Alert.alert(
        'Stream Ended',
        `Total earnings: ₦${totalEarnings.toLocaleString()}`
      );
    } catch (error) {
      console.error('Failed to end stream:', error);
      setIsStreaming(false);
      setViewers(0);
    }
  };

  const sendComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        user: 'You',
        text: newComment,
        timestamp: new Date(),
      };
      setComments((prev) => [comment, ...prev]);
      setNewComment('');
    }
  };

  const sendTip = async () => {
    const amount = parseInt(tipAmount);
    if (!amount || amount < 100) {
      Alert.alert('Error', 'Minimum tip is ₦100');
      return;
    }

    try {
      await ApiService.sendTip('mock-stream-id', { amount });
      const tip = {
        id: Date.now(),
        user: 'You',
        amount,
        timestamp: new Date(),
      };
      setTips((prev) => [tip, ...prev]);
      setTotalEarnings((prev) => prev + amount);
      setShowTipModal(false);
      setTipAmount('');
      Alert.alert('Success', `Tip of ₦${amount} sent!`);
    } catch (error) {
      console.error('Failed to send tip:', error);
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.comment}>
      <Text style={styles.commentUser}>{item.user}:</Text>
      <Text style={styles.commentText}>{item.text}</Text>
    </View>
  );

  const renderTip = ({ item }) => (
    <View style={styles.tip}>
      <Text style={styles.tipText}>
        💰 {item.user} tipped ₦{item.amount.toLocaleString()}
      </Text>
    </View>
  );

  if (!isStreaming) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Go Live</Text>
        </View>

        <View style={styles.setupContainer}>
          <Text style={styles.setupTitle}>Start Your Live Stream</Text>

          <TextInput
            style={styles.titleInput}
            placeholder="Enter stream title..."
            placeholderTextColor="#c0b29b"
            value={streamTitle}
            onChangeText={setStreamTitle}
          />

          <TouchableOpacity style={styles.startButton} onPress={startStream}>
            <Text style={styles.startButtonText}>🔴 Go Live</Text>
          </TouchableOpacity>

          <Text style={styles.setupHint}>
            Share your creative process, showcase your skills, and earn tips
            from viewers!
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.streamHeader}>
        <View style={styles.streamInfo}>
          <View style={styles.liveIndicator}>
            <Text style={styles.liveText}>🔴 LIVE</Text>
          </View>
          <Text style={styles.viewerCount}>👥 {viewers} viewers</Text>
        </View>
        <TouchableOpacity style={styles.endButton} onPress={endStream}>
          <Text style={styles.endButtonText}>End Stream</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.streamContent}>
        <Text style={styles.streamTitle}>{streamTitle}</Text>
        <Text style={styles.earnings}>
          Earnings: ₦{totalEarnings.toLocaleString()}
        </Text>
      </View>

      <View style={styles.interactionPanel}>
        <View style={styles.tipsSection}>
          <Text style={styles.sectionTitle}>Recent Tips</Text>
          <FlatList
            data={tips.slice(0, 3)}
            renderItem={renderTip}
            keyExtractor={item => item.id.toString()}
            style={styles.tipsList}
          />
        </View>

        <View style={styles.commentsSection}>
          <Text style={styles.sectionTitle}>Comments</Text>
          <FlatList
            data={comments.slice(0, 5)}
            renderItem={renderComment}
            keyExtractor={item => item.id.toString()}
            style={styles.commentsList}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Say something..."
          placeholderTextColor="#c0b29b"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendComment}>
          <Text>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tipButton}
          onPress={() => setShowTipModal(true)}
        >
          <Text style={styles.tipButtonText}>💰 Tip</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showTipModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowTipModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.tipModal}>
            <Text style={styles.modalTitle}>Send a Tip</Text>
            <TextInput
              style={styles.tipInput}
              placeholder="Enter amount (₦)"
              placeholderTextColor="#c0b29b"
              value={tipAmount}
              onChangeText={setTipAmount}
              keyboardType="numeric"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowTipModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmButton} onPress={sendTip}>
                <Text style={styles.confirmButtonText}>Send Tip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    fontSize: 24,
    color: '#FFFFFF',
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  setupContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  setupTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  titleInput: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 30,
  },
  startButton: {
    backgroundColor: '#F5A623',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B1B1E',
  },
  setupHint: {
    fontSize: 14,
    color: '#c0b29b',
    textAlign: 'center',
    lineHeight: 20,
  },
  streamHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  streamInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveIndicator: {
    backgroundColor: '#FF0000',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  liveText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  viewerCount: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  endButton: {
    backgroundColor: '#FF4444',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  endButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  streamContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  streamTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  earnings: {
    fontSize: 16,
    color: '#F5A623',
    fontWeight: 'bold',
  },
  interactionPanel: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tipsSection: {
    marginBottom: 20,
  },
  commentsSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  tipsList: {
    maxHeight: 80,
  },
  commentsList: {
    flex: 1,
  },
  tip: {
    backgroundColor: '#F5A623',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  tipText: {
    color: '#1B1B1E',
    fontWeight: 'bold',
    fontSize: 12,
  },
  comment: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  commentUser: {
    color: '#F5A623',
    fontWeight: 'bold',
    marginRight: 5,
  },
  commentText: {
    color: '#FFFFFF',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#FFFFFF',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#F5A623',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  tipButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  tipButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipModal: {
    backgroundColor: '#2A2A2A',
    borderRadius: 20,
    padding: 30,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  tipInput: {
    backgroundColor: '#1B1B1E',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: '#FFFFFF',
    width: '100%',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#666',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  cancelButtonText: {
    color: '#FFFFFF',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#F5A623',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#1B1B1E',
    fontWeight: 'bold',
  },
});

export default LiveStreamScreen;
