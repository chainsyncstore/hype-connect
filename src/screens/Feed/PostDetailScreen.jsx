import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import WebHeader from '../../components/WebHeader';

const PostDetailScreen = () => {
  const router = useRouter();
  const { postId } = useLocalSearchParams();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/(tabs)/feed');
    }
  };

  const handleTip = () => {
    Alert.alert('Tip Sent', 'You tipped $10 to Sophia Carter!');
  };

  return (
    <View className="flex-1 bg-[#221c11]">
      <WebHeader />
      <View className="flex-row justify-between items-center px-4 py-3">
        <TouchableOpacity className="p-2" onPress={handleBack}>
          <Text className="text-white text-2xl">{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2">
          <Text className="text-white">Share</Text>
        </TouchableOpacity>
      </View>

      <Image
        className="w-full h-64"
        source={{
          uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp7ZZ9horNvZvcWjejoOv3zIAOo4kAdkGu8aSUO1UBanQOHx1M4Cy4RP68LFLlFQubiPnQUxWAfo-jMAO8M9Fyr9JYHhHZ6mQGO_m6H0iE_d6RP4U0JqaQtKsD6ws-DGgfeo9SX4-H6Qg6n4rXsGt-1yy8s3ZNzOhUTm8_k08KM4DO0iwyGh9SUeL_RLBpEH-JUnzsXO1SDynDrP4qppWWA0eHd5VUaCVQ9i-e4NDcVovFbG8-KgswbYVynIeAVC2N9BZuWQELlBM',
        }}
      />

      <View className="flex-row items-center p-4">
        <Image
          className="w-12 h-12 rounded-full mr-3"
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb-OPiUEWElbbqL6Jlpm1YigcrgBRWFEK7f8kcwoj3asxBGqoYp_6pMmnkdxbF3x1VlLnV_ODQQBVpGOZiHYx12veY_hcgUpo7IWGs4-CgqpTqWnTPgQ6CJFeHYmangOIhlxNFsuUdOHvpEpYInrMkSNiQyV9pSmdAhjkq_xo-ymFpw8cbF5OKOL_9eKW-38oPjucedy53PFQWmSey5FnY8-E6zRb-cZOjXzPGOSj8_LkEcztdfZVj3ccrSYJupq_uXB9Rf5UM14',
          }}
        />
        <View className="flex-1">
          <Text className="text-white font-bold text-lg">Sophia Carter</Text>
          <Text className="text-gray-400 text-sm">1.2K followers</Text>
        </View>
      </View>

      <Text className="text-gray-400 text-xs px-4 mb-2">2d · Photography</Text>
      <Text className="text-white text-base px-4 mb-4">
        Capturing the essence of urban life through a lens. This series explores
        the vibrant streets of Tokyo, showcasing the city's unique blend of
        tradition and modernity. Each shot tells a story, from the bustling
        markets to the serene temples, offering a glimpse into the soul of this
        dynamic metropolis.
      </Text>

      <View className="flex-row justify-around items-center border-t border-b border-gray-700 py-3 mb-4">
        <View className="flex-row items-center">
          <Text className="text-white text-sm">❤️ 2.3K</Text>
        </View>
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => router.push({ pathname: '/(tabs)/feed/comments/[postId]', params: { postId: postId } })}
        >
          <Text className="text-white text-sm">💬 120</Text>
        </TouchableOpacity>
        <View className="flex-row items-center">
          <Text className="text-white text-sm">✈️ 50</Text>
        </View>
      </View>

      <Text className="text-white text-lg font-bold px-4 mb-3">Comments</Text>

      {/* Comment 1 */}
      <View className="flex-row px-4 py-3">
        <Image
          className="w-10 h-10 rounded-full mr-3"
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGgT3FhkqvoiEJbAeV7Dz7-q-1utbxTe35CNXz2FwLLt0vwarqGh4M19raZFpUt823NwN3h7v-l3EoquhBMNPK9Ur0WclaroPB14z0oEe24mVyd5-gtYDbfMyWLg2AHAmbCoqWCqrnIk1IPfcGhUVOSJVdiWDL6xftPO316mLVhkrC_yq3g-mNSUaSJV3fULhvHUuj80sLl62SA1JhA9dDDWB6S_0_r7FD5hw-j3BA6jbw8N_PPCvaHj98mMMNYg7_8kwcSFhfr00',
          }}
        />
        <View className="flex-1">
          <View className="flex-row justify-between">
            <Text className="text-white font-bold">Ethan Bennett</Text>
            <Text className="text-gray-400">1d</Text>
          </View>
          <Text className="text-white">
            Absolutely stunning work! The colors and composition are
            breathtaking. You've truly captured the spirit of Tokyo.
          </Text>
        </View>
      </View>

      {/* Comment 2 */}
      <View className="flex-row px-4 py-3">
        <Image
          className="w-10 h-10 rounded-full mr-3"
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp6S5KbyC2CpA7N1f1tky1R0uNtLCSLmnCye3Rdxxe26AyjqossKjTo2TACNb1_6eMiUCIFLzkrEd2BnglSRHvREULbgDE_9T-0qfA7BAS3A3viLZxD89IjeHiJGd3jkXT1mg2Y67s0GN8xBuAl7Ah641U_Fp2_mi-Hw1_al7F1JTFhZGuNrLsnqfUDwDBdidlqNLYDmkDxhUKJYieAR0yTF1CwLlvVNboI6EcsUoox9nZ9hwJVC3ouWqGrnq0wI5dKMkWMhSDAB0',
          }}
        />
        <View className="flex-1">
          <View className="flex-row justify-between">
            <Text className="text-white font-bold">Olivia Hayes</Text>
            <Text className="text-gray-400">2d</Text>
          </View>
          <Text className="text-white">
            This series is incredible. The way you've used light and shadow to
            highlight the city's architecture is masterful. Each photo is a work
            of art.
          </Text>
        </View>
      </View>

      <View className="p-4">
        <TouchableOpacity className="bg-accent rounded-full py-3 items-center" onPress={handleTip}>
          <Text className="text-primary font-bold text-lg">Tip $10</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-around items-center bg-gray-800 py-3">
        <Text>🏠</Text>
        <Text>🔎</Text>
        <Text>➕</Text>
        <Text>🗄️</Text>
        <Text>👤</Text>
      </View>

      <View className="h-1.5" />
    </View>
  );
};

export default PostDetailScreen;
