import React, { useEffect } from 'react';
import { Platform, TouchableOpacity, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import WebHeader from '../../components/WebHeader';

const CreatorEarningsScreen = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('CreatorEarningsScreen mounted');
    return () => {
      console.log('CreatorEarningsScreen unmounted');
    };
  }, []);

  return (
    <View className="relative flex-1 bg-[#221c11]">
      <WebHeader />
      <View className="flex items-center bg-[#221c11] p-4 pb-2 justify-between flex-row">
        <TouchableOpacity onPress={() => router.back()} className="text-white flex size-12 shrink-0 items-center">
          <Text className="text-white text-2xl">{'<'}</Text>
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Earnings
        </Text>
      </View>

      <Text className="text-white tracking-light text-2xl font-bold leading-tight px-4 pb-2 pt-5">
        Total Earnings
      </Text>
      <View className="flex flex-wrap gap-4 p-4">
        <View className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#483a23]">
          <Text className="text-white text-base font-medium leading-normal">
            Last 30 Days
          </Text>
          <Text className="text-white tracking-light text-2xl font-bold leading-tight">
            $1,250
          </Text>
        </View>
        <View className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#483a23]">
          <Text className="text-white text-base font-medium leading-normal">
            Lifetime
          </Text>
          <Text className="text-white tracking-light text-2xl font-bold leading-tight">
            $5,750
          </Text>
        </View>
      </View>

      <Text className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Earnings Breakdown
      </Text>
      <View className="flex flex-wrap gap-4 p-4">
        <View className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#675332]">
          <Text className="text-white text-base font-medium leading-normal">
            Tips
          </Text>
          <Text className="text-white tracking-light text-2xl font-bold leading-tight">
            $350
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CreatorEarningsScreen;
