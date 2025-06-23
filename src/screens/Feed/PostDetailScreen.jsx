import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PostDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  const handleTip = () => {
    Alert.alert('Tip Sent', 'You tipped $10 to Sophia Carter!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={{ color: '#fff' }}>Share</Text>
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
        Capturing the essence of urban life through a lens. This series explores
        the vibrant streets of Tokyo, showcasing the city's unique blend of
        tradition and modernity. Each shot tells a story, from the bustling
        markets to the serene temples, offering a glimpse into the soul of this
        dynamic metropolis.
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

      {/* Comment 1 */}
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
            Absolutely stunning work! The colors and composition are
            breathtaking. You've truly captured the spirit of Tokyo.
          </Text>
        </View>
      </View>

      {/* Comment 2 */}
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
            This series is incredible. The way you've used light and shadow to
            highlight the city's architecture is masterful. Each photo is a work
            of art.
          </Text>
        </View>
      </View>

      <View style={styles.tipContainer}>
        <TouchableOpacity style={styles.tipButton} onPress={handleTip}>
          <Text style={styles.tipButtonText}>Tip $10</Text>
        </TouchableOpacity>
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
  // All your styles unchanged
  container: {
    flex: 1,
    backgroundColor: '#221c11',
  },
  // ... rest of your original styles ...
});

export default PostDetailScreen;