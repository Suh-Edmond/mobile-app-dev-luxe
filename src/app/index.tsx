import { ProductCard } from "@/components/ProductCard";
import SafeAreaView from "@/components/SafeAreaView";
import { CATEGORY, PRODUCTS } from "@/utils/constants";
import { FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";

import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [products, setProducts] = useState(PRODUCTS);
  const [categories, setCategories] = useState<string[]>(CATEGORY);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
    if (selectedCategory === "All") {
      setProducts(PRODUCTS);
    } else {
      setProducts(
        PRODUCTS.filter((product) => product.category === selectedCategory),
      );
    }
  };

  const filteredProducts = useMemo(() => {
    handleCategoryPress(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    handleCategoryPress("All");
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-fantasy">
      <View className="bg-white p-4 shadow-xs justify-between flex-row items-center">
        <Text className="text-3xl">LUXE</Text>
        <Pressable onPress={() => router.push("/cart")}>
          <FontAwesome6
            name="cart-shopping"
            size={24}
            color="black"
          ></FontAwesome6>
        </Pressable>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ padding: 16, gap: 12, paddingBottom: 32 }}
        ListHeaderComponent={
          <>
            <Text className="text-cod-gray text-[32px] font-semibold">
              Hello, welcome back!
            </Text>
            <Text className="text-scorpion text-base py-1">
              Discover curated excellence for your lifestyle
            </Text>

            <View className="rounded-xl overflow-hidden mt-4">
              <Image
                source={{ uri: PRODUCTS[5].image }}
                style={{ width: "100%", height: 200 }}
              ></Image>
              <View className="absolute top-36 left-5 flex gap-1 z-10">
                <Text className="text-3xl font-semibold text-white">
                  {PRODUCTS[5].name}
                </Text>
                <Text className="font-medium text-white text-xl">
                  ${PRODUCTS[5].price}
                </Text>
              </View>

              <LinearGradient
                pointerEvents="none"
                colors={["transparent", "rgba(0,0,0,0.85)"]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 220,
                }}
              ></LinearGradient>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex-row gap-4 mt-4">
                {categories.map((category, index) => (
                  <Pressable
                    key={index}
                    className="rounded-full border px-6 py-4 mt-4"
                    style={{
                      paddingVertical: 10,
                      borderRadius: 999,
                      paddingHorizontal: 28,
                      borderWidth: 1,
                      backgroundColor:
                        selectedCategory === category ? "#000" : "#fff",
                      borderColor:
                        selectedCategory === category
                          ? "border-gray-300"
                          : "#ccc",
                    }}
                    onPress={() => handleCategoryPress(category)}
                  >
                    <Text
                      className="text-md"
                      style={{
                        color: selectedCategory === category ? "#fff" : "#000",
                      }}
                    >
                      {category}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </ScrollView>
            <Text className="font-medium text-2xl mt-8 mb-4">
              Featured Products
            </Text>
          </>
        }
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <ProductCard product={item} />
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
