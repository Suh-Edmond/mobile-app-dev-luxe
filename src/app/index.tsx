import SafeAreaView from "@/components/SafeAreaView";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-gray-400">
      <View className="bg-red-500">
        <Text className="bg-red-500">Luxe</Text>
      </View>
    </SafeAreaView>
  );
}
