import SafeAreaView from "@/components/SafeAreaView";
import { useLuxeStore } from "@/store/useLuxeStore";
import { Product } from "@/types/app.types";
import { FontAwesome6 } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Cart() {
  const router = useRouter();
  const { cart, removeFromCart } = useLuxeStore();
  const computeSubTotal = () => {
    return cart.map((item) => item.price).reduce((a, b) => a + b);
  };

  const computeTotal = () => {
    return computeSubTotal() + 12.0 + 34.5;
  };

  const handleRemoveFromCart = (item: Product) => {
    removeFromCart(item.id);
  };
  return (
    <SafeAreaView className="bg-fantasy flex-1">
      <View className="p-4 bg-white shadow-xs gap-4 flex-row items-center">
        <Pressable onPress={() => router.back()}>
          <FontAwesome6
            name="chevron-left"
            size={24}
            color="black"
          ></FontAwesome6>
        </Pressable>

        <Text className="text-3xl">LUXE</Text>
      </View>
      {cart.length === 0 ? (
        <View className="flex items-center justify-center p-4">
          <Text className="text-2xl font-medium">Cart is Empty</Text>
          <Pressable
            className="border border-gray-300 py-2 px-6 rounded-xl mt-6"
            onPress={() => router.back()}
          >
            <Text className="text-center text-xl"> Go to Home</Text>
          </Pressable>
        </View>
      ) : (
        <ScrollView className="p-4">
          <View>
            <Text className="text-cod-gray text-[32px] font-semibold">
              Order Summary
            </Text>

            <Text className="text-scorpion text-base py-1">
              Review your selections before payment
            </Text>
          </View>

          <View className="mt-4 gap-4">
            {cart.map((item, index) => (
              <View
                key={index}
                className="bg-white p-4 rounded-xl flex-row justify-between"
              >
                <View className="rounded-xl overflow-hidden">
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 100, height: 100 }}
                  />
                </View>
                <View className="gap-1 ml-4">
                  <Text className="text-xl font-medium">
                    {item.name.length > 12
                      ? item.name.slice(0, 13).concat("...")
                      : item.name}
                  </Text>
                  <Text className="text-gray-500">{item.category}</Text>
                  <Text className="text-lg font-medium">${item.price}</Text>
                </View>
                <Pressable
                  className="ml-4"
                  onPress={() => handleRemoveFromCart(item)}
                >
                  <Entypo name="circle-with-cross" size={24} color="black" />
                </Pressable>
              </View>
            ))}
          </View>

          <View className="mt-8 bg-soft-peach rounded-xl overflow-hidden">
            <View className="flex-row justify-between items-center">
              <Text className="text-xl text-gray-500">
                Subtotal : ({cart.length} items){" "}
              </Text>
              <Text className="text-lg">${computeSubTotal().toFixed(2)}</Text>
            </View>

            <View className="flex-row justify-between items-center mt-5">
              <Text className="text-xl text-gray-500">Delivery</Text>
              <Text className="text-lg">$12.0</Text>
            </View>

            <View className="flex-row justify-between items-center mt-5">
              <Text className="text-xl text-gray-500">Taxes</Text>
              <Text className="text-lg">$34.50</Text>
            </View>

            <View className="bg-gray-300 h-[0.5px] w-full mt-4"></View>

            <View className="flex-row justify-between items-center mt-5">
              <Text className="text-2xl text-medium">Total</Text>
              <Text className="text-2xl text-medium">
                ${computeTotal().toFixed(2)}
              </Text>
            </View>
          </View>
          <Pressable className="bg-black items-center flex-row gap-4 justify-center mt-16 mb-16 rounded-full px-4 py-5">
            <Text className="text-white text-lg font-medium">
              PROCEED TO CHECKOUT
            </Text>
            <FontAwesome6
              name="arrow-right"
              size={20}
              color="white"
            ></FontAwesome6>
          </Pressable>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
