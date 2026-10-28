import { cssInterop } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

// Tell NativeWind to map className to the style prop
cssInterop(SafeAreaView, {
  className: "style",
});

export default SafeAreaView;
