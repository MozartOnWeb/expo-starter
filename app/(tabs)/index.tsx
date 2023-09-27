import { useState } from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { SvgXml } from "react-native-svg";

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "../../components/Themed";
import Colors from "../../constants/Colors";

//import components
import MainPost from "../../components/home/MainPost";

import { NotificationsIcon, SearchIcon } from "../../assets/icons";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const categories = [
  {
    name: "All",
  },
  {
    name: "Business",
  },
  {
    name: "Sports",
  },
  {
    name: "Technology",
  },
  {
    name: "Entertainment",
  },
  {
    name: "Science",
  },
  {
    name: "Health",
  },
];

const mainPosts = [
  {
    from: "Otaku World",
    image:
      "https://i.pinimg.com/564x/01/45/bd/0145bd7a6cfb956bdef62cb2ea60276f.jpg",
    title: "Jujutsu Kaisen 0: The Movie, The Saga Continues",
    comments: "978",
    share: "4.5k",
    date: "2 Heures",
  },
  {
    from: "CNN Mali",
    image:
      "https://i.pinimg.com/564x/01/45/bd/0145bd7a6cfb956bdef62cb2ea60276f.jpg",
    title: "Lionel Messi Wants To Fight Cristian Ronaldo again",
    comments: "978",
    share: "4.5k",
    date: "2 Heures",
  },
  {
    from: "CNN Mali",
    image:
      "https://i.pinimg.com/564x/01/45/bd/0145bd7a6cfb956bdef62cb2ea60276f.jpg",
    title: "Lionel Messi Wants To Fight Cristian Ronaldo again",
    comments: "978",
    share: "4.5k",
    date: "2 Heures",
  },
];

export default function TabOneScreen() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleActiveCategory = (category: string) => {
    setActiveCategory({ name: category });
  };
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {/* HOME HEADER SECTION */}
        <View style={headerStyles.header}>
          <View style={headerStyles.profile}>
            <View style={headerStyles.imageContainer}>
              <Image
                style={headerStyles.image}
                source={require("../../assets/images/profile.png")}
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
              />
            </View>
            <Text style={headerStyles.title}>Yacouba Dama</Text>
          </View>

          <Pressable>
            <SvgXml
              xml={NotificationsIcon}
              width={24}
              height={24}
              fill={Colors[colorScheme ?? "light"].tint}
            />
          </Pressable>
        </View>

        {/* HOME SEARCH SECTION */}
        <View style={{ paddingHorizontal: 20 }}>
          <View
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
            style={homeSearchStyles.container}
          >
            <View style={homeSearchStyles.left}>
              <SvgXml
                xml={SearchIcon}
                width={24}
                height={24}
                fill={Colors[colorScheme ?? "light"].tabIconDefault}
              />
              <TextInput
                style={homeSearchStyles.textInput}
                placeholder="Find interesting news"
              />
            </View>
            <Pressable style={homeSearchStyles.button}>
              <Text style={homeSearchStyles.text}>Search</Text>
            </Pressable>
          </View>
        </View>

        {/* HOME CATEGORIES SECTION */}
        <View>
          <FlashList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={homeCategoriesStyles.container}
            renderItem={({ item }: { item: string }) => {
              return (
                <Pressable
                  onPress={() => handleActiveCategory(item)}
                  style={
                    activeCategory.name === item
                      ? homeCategoriesStyles.categoryActive
                      : [
                          homeCategoriesStyles.category,
                          {
                            backgroundColor:
                              Colors[colorScheme ?? "light"].backgroundColor,
                          },
                        ]
                  }
                >
                  <Text style={homeCategoriesStyles.categoryText}>{item}</Text>
                </Pressable>
              );
            }}
            estimatedItemSize={50}
            data={categories.map((category) => category.name)}
          />
        </View>

        {/* HOME MAIN NEWS SECTION */}
        <View style={{ marginTop: 20 }}>
          <FlashList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={homeMainPostStyles.container}
            estimatedItemSize={50}
            data={mainPosts}
            renderItem={({
              item,
            }: {
              item: {
                from: string;
                image: any;
                title: string;
                comments: string;
                share: string;
                date: string;
              };
            }) => {
              return <MainPost {...item} />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {},
});

const headerStyles = StyleSheet.create({
  header: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  imageContainer: {
    backgroundColor: "#FB6A01",
    borderRadius: 100,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 100,
    objectFit: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "manrope_semibold",
  },
});

const homeSearchStyles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 40,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 8,
    borderRadius: 100,
    width: "100%",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "transparent",
    width: "50%",
    overflowX: "scroll",
  },
  textInput: {},
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FB6A01",
  },
  text: {
    fontSize: 12,
    fontFamily: "manrope_semibold",
    color: "white",
  },
});

const homeCategoriesStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 20,
  },
  category: {
    marginRight: 20,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  categoryActive: {
    marginRight: 20,
    borderRadius: 100,
    backgroundColor: "#FB6A01",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: "manrope_regular",
  },
});

const homeMainPostStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 20,
  },
});
