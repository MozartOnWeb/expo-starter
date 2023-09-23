import { Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { SvgXml } from "react-native-svg";

import { Text, View, SafeAreaView, ScrollView } from "../../components/Themed";

import { NotificationsIcon } from "../../assets/icons";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
              fill={"#FB6A01"}
            />
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
