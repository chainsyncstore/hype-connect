import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>For You Feed</Text>
      <Link href="/upload" asChild>
        <Button title="Go to Upload" />
      </Link>
      <Link href="/search" asChild>
        <Button title="Go to Search" />
      </Link>
    </View>
  );
}