import { Pressable, StyleSheet, useColorScheme, Button } from "react-native";
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

import { NotificationsIcon, SearchIcon } from "../../assets/icons";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function TabOneScreen() {
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    paddingHorizontal: 20,
  },
});

const headerStyles = StyleSheet.create({
  header: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
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
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#FB6A01",
  },
  text: {
    fontSize: 12,
    fontFamily: "manrope_semibold",
    color: "white",
  },
});
