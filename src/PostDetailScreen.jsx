import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const PostDetailScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.postImage}
        source={{
          uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp7ZZ9horNvZvcWjejoOv3zIAOo4kAdkGu8aSUO1UBanQOHx1M4Cy4RP68LFLlFQubiPnQUxWAfo-jMAO8M9Fyr9JYHhHZ6mQGO_m6H0iE_d6RP4U0JqaQtKsD6ws-DGgfeo9SX4-H6Qg6n4rXsGt-1yy8s3ZNzOhUTm8_k08KM4DO0iwyGh9SUeL_RLBpEH-jUnzsXO1SDynDrP4qppWWA0eHd5VUaCVQ9i-e4NDcVovFbG8-KgswbYVynIeAVC2N9BZuWQELlBM',
        }}
      />
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb-OPiUEWElbbqL6Jlpm1YigcrgBRWFEK7f8kcwoj3asxBGqoYp_6pMmnkdxbF3x1VlLnV_ODQQBVpGOZiHYx12veY_hcgUpo7IWGs4-CgqpTqWnTPgQ6CJFeHYmangOIhlxNFsuUdOHvpEpYInrMkSNiQyV9p5SmdAhjkq_xo-ymFpw8cbF5OKOL_9eKW-38oPjucedy53PFQWmSey5FnY8-E6zRb-cZOjXzPGOSj8_LkEcztdfZVj3ccrSYJupq_uXB9Rf5UM14',
          }}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Sophia Carter</Text>
          <Text style={styles.profileFollowers}>1.2K followers</Text>
        </View>
      </View>
      <Text style={styles.postCategory}>2d · Photography</Text>
      <Text style={styles.postDescription}>
        Capturing the essence of urban life through a lens. This series explores the vibrant streets
        of Tokyo, showcasing the city's unique blend of tradition and modernity. Each shot tells a
        story, from the bustling markets to the serene temples, offering a glimpse into the soul of
        this dynamic metropolis.
      </Text>
      <View style={styles.postActions}>
        <View style={styles.postAction}>
          <Text style={styles.postActionText}>❤️ 2.3K</Text>
        </View>
        <TouchableOpacity
          style={styles.postAction}
          onPress={() => navigation.navigate('CommentSection')}
        >
          <Text style={styles.postActionText}>💬 120</Text>
        </TouchableOpacity>
        <View style={styles.postAction}>
          <Text style={styles.postActionText}>✈️ 50</Text>
        </View>
      </View>
      <Text style={styles.commentsTitle}>Comments</Text>
      <View style={styles.commentContainer}>
        <Image
          style={styles.commentProfileImage}
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGgT3FhkqvoiEJbAeV7Dz7-q-1utbxTe35CNXz2FwLLt0vwarqGh4M19raZFpUt823NwN3h7v-l3EoquhBMNPK9Ur0WclaroPB14z0oEe24mVyd5-gtYDbfMyWLg2AHAmbCoqWCqrnIk1IPfcGhUVOSJVdiWDL6xftPO316mLVhkrC_yq3g-mNSUaSJV3fULhvHUuj80sLl62SA1JhA9dDDWB6S_0_r7FD5hw-j3BA6jbw8N_PPCvaHj98mMMNYg7_8kwkSFhfr00',
          }}
        />
        <View style={styles.commentDetails}>
          <View style={styles.commentHeader}>
            <Text style={styles.commentName}>Ethan Bennett</Text>
            <Text style={styles.commentTime}>1d</Text>
          </View>
          <Text style={styles.commentText}>
            Absolutely stunning work! The colors and composition are breathtaking. You've truly
            captured the spirit of Tokyo.
          </Text>
        </View>
      </View>
      <View style={styles.commentContainer}>
        <Image
          style={styles.commentProfileImage}
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp6S5KbyC2CpA7N1f1tky1R0uNtLCSLmnCye3Rdxxe26AyjqossKjTo2TACNb1_6eMiUCIFLzkrEd2BnglSRHvREULbgDE_9T-0qfA7BAS3A3viLZxD89IjeHiJGd3jkXT1mg2Y67s0GN8xBuAl7Ah641U_Fp2_mi-Hw1_al7F1JTFhZGuNrLsnqfUDwDBdidlqNLYDmkDxhUKJYieAR0yTF1CwLlvVNboI6EcsUoox9nZ9hwJVC3ouWqGrnq0wI5dKMkWMhSDAB0',
          }}
        />
        <View style={styles.commentDetails}>
          <View style={styles.commentHeader}>
            <Text style={styles.commentName}>Olivia Hayes</Text>
            <Text style={styles.commentTime}>2d</Text>
          </View>
          <Text style={styles.commentText}>
            This series is incredible. The way you've used light and shadow to highlight the city's
            architecture is masterful. Each photo is a work of art.
          </Text>
        </View>
      </View>
      <View style={styles.tipContainer}>
        <View style={styles.tipButton}>
          <Text style={styles.tipButtonText}>Tip $10</Text>
        </View>
      </View>
      <View style={styles.bottomNavigation}>
        <Text>🏠</Text>
        <Text>🔎</Text>
        <Text>➕</Text>
        <Text>🗄️</Text>
        <Text>👤</Text>
      </View>
      <View style={styles.bottomSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221c11',
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
  shareButton: {
    padding: 8,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileFollowers: {
    color: '#c9b592',
    fontSize: 14,
  },
  postCategory: {
    color: '#c9b592',
    fontSize: 14,
    paddingHorizontal: 16,
  },
  postDescription: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postActionText: {
    color: '#c9b592',
    fontSize: 14,
  },
  commentsTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
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
    color: '#c9b592',
    fontSize: 12,
  },
  commentText: {
    color: '#fff',
    fontSize: 14,
  },
  tipContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tipButton: {
    backgroundColor: '#483a23',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  tipButtonText: {
    color: '#fff',
    fontSize: 14,
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

export default PostDetailScreen;
