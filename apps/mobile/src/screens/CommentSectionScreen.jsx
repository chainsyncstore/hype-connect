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

import ReportBlockModal from '../components/modals/ReportBlockModal';

const CommentSectionScreen = ({ navigation }) => {
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
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAZxXbIfSemAaoiYtdtyizyEuyDjNB-RhBYkOstrU5AC86mv5qxEDUFMitTD5EyZdAML8cpOU8vCidFM7On0m4YlmI-CtzgggGSLx28B1fZCZJFnVNGVXw1o6I5y1DnuJP7fGwUxQCQ9KwBVxm7XpwiYHAayLOgkvpqmOcEv4MkeVwIXy0EA4yWyY6cVsiCNSoFRp4fyg-DHu_V_nEvQzYRjJliAiLcG8UDS2nuexFBYpai_YoldQ_n8c3sEmFszt-4aSyu9iSYViM"
          />
        </TouchableOpacity>
        <TouchableOpacity onLongPress={handleLongPress}>
          <CommentItem
            name="Sophia Bennett"
            time="1d"
            comment="I'm a graphic designer with 5+ years of experience. My portfolio is ready to go, and I'm excited to see what this collaboration brings."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDXVh0QEkT24QdVuppJJVkL-uO7_Fe78mQARdlQzkbZ4GQukf1-4ombvTaczYS7AeGaLRS2hxkCyRKwHbBVjGzQVcvwa8Ci3rNblRYqoM9roo04tPmqrYiccMfk_iKeacns8qjT8UJRWyKrrGA6BKkgR4ruATPOhNId8cMnBJ0ODAivl3wgb0_aRpKF5RESGWMHFIgqFh2jXKE-Lr6GJ0KbceHTOl1MXOCb78z1-TBtN1p7XhfJVBQ8JwoNQXJTVTqGzRVn4RYl98w"
          />
        </TouchableOpacity>
        <TouchableOpacity onLongPress={handleLongPress}>
          <CommentItem
            name="Ethan Walker"
            time="1d"
            comment="As a freelance photographer, I'm always on the lookout for new projects. This sounds like a perfect fit for my skill set. Fingers crossed!"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBjGaxf-KZsg7wMSO8nZNfS-KLfib6ZSyAQkGkniAAEvrpSv6GBSFS8f1quFZ4LWnI2PreMDBvyAhSSoTlxc_kXFbjyXn_Seq0mVP2oj-cFZU55RYp_B99RJSAv1bhtBzUk1suQm2Bhidef7d-W9WXxYVWGU8fK4o-OnZ9ENT-r5iEVWeGqWWdnwwF3sfDqjXeEm-eLWy_WPLhYmb_ObzXNkQDuUCwh692EqWbLB73sb-0T7SDjrZo0EFFn-3qWvnHYwEicm3W16DQ"
          />
        </TouchableOpacity>
        <TouchableOpacity onLongPress={handleLongPress}>
          <CommentItem
            name="Ava Harper"
            time="12h"
            comment="I'm a video editor with a passion for storytelling. I've worked on various short films and documentaries, and I'm eager to contribute my expertise to this project."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCO_Pjsbz_Ah7rik3u8ubfBkA5VcGrTp8lo5oKL6CsW_nngq1XEbjP-JUtRnB44LuAGh771LVfp5P7M2Ovaqk462HvI1lGL3x_PQqSELyHeT8pxGwOzGrL5MvdRPG_dzrV-F_tK830N6qiqvVNGLsfBS1Y0_U-JU9CdivtLXEBnmctMaA9XtDksKPwE0kOlJDdyZyZAuUskamXi4Jb5pP2H64qlibJLqjRb_1Q_3tcezeDmpr27R7lRk7IFjG2w75YOFI4vOcFL2h8"
          />
        </TouchableOpacity>
        <TouchableOpacity onLongPress={handleLongPress}>
          <CommentItem
            name="Noah Hayes"
            time="8h"
            comment="I'm a music composer with a background in film scoring. I've created original soundtracks for several indie games and short films, and I'm excited to explore the possibilities of this collaboration."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuArh-VP3q6uP4_QDfZJD5YKbeSyZ3FI9obHHhP3Mpud3x9oDelRHpRwC_yqRX4fyW7nbZgIOJZ3SiO775TyHiToz5oKyXkIsIzhFIZe4C15Js0oIlsMs8yKJb888Lnqw1N02Z5pKIkFk1C5EuuVeW85YLiBKZI5L3abjYvR1bOJM6xpqsiOCNMtpntGoiw0T1olOZMBH3ZdAq_fKFLJoI_q0z87IzndlblgeZoRq-p2we-uOww7flrWcL9_mHmf9tFqme_y3z7jPik"
          />
        </TouchableOpacity>
        <View style={styles.bottomSpace} />
      </ScrollView>
      <View style={styles.addCommentContainer}>
        <Image
          style={styles.addCommentProfileImage}
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxkaVhpUCeiE01evsjk1bcSASN6TLiAV1M4OHsnASFr-RC4RZ8dkzNsZfVIMronJaImTvAnkxH4FrK0OgPHtf1mkvWokIIL7lnwza8T9vXXnGXNANsqPbLpxiuYLaM_-a5MU9pujDxsQ6Ftiw-Irc8nbtPqzDU54OXbrGtYit2KBRKRhMLpq_zVMzqP7SrCeRxyBEDReFqGZ_C1LRBmKc2IXpuqgqGfEeeX5XZHK5fRQLgKfO5hcSvgW0Wm8sLYnfQZjDMxqaCv48',
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
