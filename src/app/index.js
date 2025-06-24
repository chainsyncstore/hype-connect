import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';
import WebHeader from '../components/WebHeader';

export default function Feed() {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <WebHeader />
      <Text className="text-white">For You Feed</Text>
      <Link href="/upload" asChild>
        <Button title="Go to Upload" />
      </Link>
      <Link href="/search" asChild>
        <Button title="Go to Search" />
      </Link>
    </View>
  );
}
