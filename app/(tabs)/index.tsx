import { Text, View, Pressable, StyleSheet } from "react-native";
import { Button } from "@/shared/ui/Button";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white gap-3 px-6">
      <Text className="text-2xl font-bold mb-6">payper 홈 화면</Text>

      {/* 일반 Pressable 테스트 */}
      {/*<Pressable style={testStyles.button}>*/}
      {/*  <Text style={testStyles.text}>일반 Pressable 버튼</Text>*/}
      {/*</Pressable>*/}

      <Button onPress={() => alert("Primary!")}>Primary 버튼</Button>
      <Button variant="outline" color="primary">Outline 버튼</Button>
      <Button variant="ghost" color="primary">Ghost 버튼</Button>

      <View className="flex-row gap-2 mt-4">
        <Button size="sm" color="success">Small</Button>
        <Button size="md" color="warning">Medium</Button>
        <Button size="lg" color="danger">Large</Button>
      </View>

      <Button fullWidth color="default" className="mt-4">전체 너비 버튼</Button>
      <Button isLoading>로딩 중...</Button>
      <Button disabled>비활성화</Button>
    </View>
  );
}

// const testStyles = StyleSheet.create({
//   button: {
//     backgroundColor: "#F67154",
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });
