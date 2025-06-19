import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ReportBlockModal from './ReportBlockModal';

const CommentSectionScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  console.log('CommentSectionScreen rendered');

  useEffect(() => {
    console.log('CommentSectionScreen mounted');

    return () => {
      console.log('CommentSectionScreen unmounted');
    };
  }, []);

  const handleLongPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: 'white', fontSize: 24 }}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comments</Text>
      </View>
      <ScrollView>
        <TouchableOpacity onLongPress={handleLongPress}>
          <CommentItem
            name="Liam Carter"
            time="2d"
            comment="This is a great opportunity for any creative looking to expand their portfolio and network with industry leaders. I'm definitely applying!"
            image="/assets/images/profile-liam-carter.jpg"
          />
        </TouchableOpacity>
        <TouchableOpacity onLongPress={handleLongPress}>
          <CommentItem
            name="Sophia Bennett"
            time="1d"
            comment="I'm a graphic designer with 5+ years of experience. My portfolio is ready to go, and I'm excited to see what this collaboration brings."
            image="/assets/images/profile-sophia-bennett.jpg"
          />
        </TouchableOpacity>
        <TouchableOpacity onLongPress={handleLongPress}>
          <CommentItem
            name="Ethan Walker"
            time="1d"
            comment="As a freelance photographer, I'm always on the lookout for new projects. This sounds like a perfect fit for my skill set. Fingers crossed!"
            image="/assets/images/profile-ethan-walker.jpg"
          />
        </TouchableOpacity>
        <TouchableOpacity onLongPress={handleLongPress}>
          <CommentItem
            name="Ava Harper"
            time="12h"
            comment="I'm a video editor with a passion for storytelling. I've worked on various short films and documentaries, and I'm eager to contribute my expertise to this project."
            image="/assets/images/profile-ava-harper.jpg"
          />
        </TouchableOpacity>
        <TouchableOpacity onLongPress={handleLongPress}>
          <CommentItem
            name="Noah Hayes"
            time="8h"
            comment="I'm a music composer with a background in film scoring. I've created original soundtracks for several indie games and short films, and I'm excited to explore the possibilities of this collaboration."
            image="/assets/images/profile-noah-hayes.jpg"
          />
        </TouchableOpacity>
        <View style={styles.bottomSpace} />
      </ScrollView>
      <View style={styles.addCommentContainer}>
        <Image
          style={styles.addCommentProfileImage}
          source={{
            uri: '/assets/images/profile-current-user.jpg',
          }}
        />
        <TextInput
          style={styles.addCommentInput}
          placeholder="Add a comment..."
          placeholderTextColor="#c0b29b"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNavigation}>
        <Text>🏠</Text>
        <Text>🔎</Text>
        <Text>➕</Text>
        <Text>🗄️</Text>
        <Text>👤</Text>
      </View>
      <ReportBlockModal visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
};

const CommentItem = ({ name, time, comment, image }) => (
  <View style={styles.commentContainer}>
    <Image style={styles.commentProfileImage} source={{ uri: image }} />
    <View style={styles.commentDetails}>
      <View style={styles.commentHeader}>
        <Text style={styles.commentName}>{name}</Text>
        <Text style={styles.commentTime}>{time}</Text>
      </View>
      <Text style={styles.commentText}>{comment}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1b14',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingRight: 40,
  },
  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  commentProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  commentDetails: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  commentTime: {
    color: '#c0b29b',
    fontSize: 12,
  },
  commentText: {
    color: '#fff',
    fontSize: 14,
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#483a23',
  },
  addCommentProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  addCommentInput: {
    flex: 1,
    backgroundColor: '#423929',
    color: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
  },
  sendButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#332a19',
    paddingVertical: 12,
  },
  bottomSpace: {
    height: 5,
    backgroundColor: '#332a19',
  },
});

export default CommentSectionScreen;
