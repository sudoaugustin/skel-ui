import { Slot } from "expo-router";
import { View } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <View>
      <Slot />
    </View>
  );
}
