import { useLuxeStore } from "@/store/useLuxeStore";
import { Product } from "@/types/app.types";
import { Image, Pressable, Text, View } from "react-native";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useLuxeStore();
  return (
    <Pressable className="rounded-xl bg-white overflow-hidden">
      <Image
        source={{ uri: product.image }}
        style={{ width: "100%", height: 200 }}
      ></Image>
      <View className="p-4 gap-1">
        <Text className="text-lg font-medium">{product.name}</Text>
        <Text className="text-xl font-medium">${product.price}</Text>
        <Pressable
          className="border border-gray-300 rounded-xl py-2 mt-2"
          onPress={() => addToCart(product)}
        >
          <Text className="text-center text-xl font-medium">Add to Cart</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
