import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Second() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold mb-6">Second 화면</Text>

      <Pressable
        onPress={() => router.back()}
        className="px-6 py-3 bg-gray-600 rounded-lg"
      >
        <Text className="text-white text-lg">뒤로가기</Text>
      </Pressable>
    </View>
  );
}
