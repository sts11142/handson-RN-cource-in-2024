import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-pblack">Hello React Native App!!!</Text>
      <StatusBar style="auto" />
      <Link href="/create" className="text-blue-600">
        Go to Home
      </Link>
    </View>
  );
}
