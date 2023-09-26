import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { SvgXml } from "react-native-svg";

interface MainPostProps {
  from: string;
  image: any;
  title: string;
  comments: string;
  share: string;
  date: string;
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const MainPost = ({
  comments,
  from,
  image,
  share,
  title,
  date,
}: MainPostProps) => {
  return (
    <View style={styles.container}>
      <Image
        contentFit="cover"
        transition={1000}
        source={{
          uri: "https://i.pinimg.com/564x/01/45/bd/0145bd7a6cfb956bdef62cb2ea60276f.jpg",
        }}
        style={styles.image}
        placeholder={blurhash}
      />
      <View>
        <View>
          <Text>{from}</Text>
        </View>

        <Text>{title}</Text>

        <View>
          <View>
            <View>
              <Text>{comments}</Text>
            </View>
            <View>
              <Text>{share}</Text>
            </View>
          </View>
          <Text>Il y'a {date}</Text>
        </View>
      </View>
    </View>
  );
};

export default MainPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    position: "relative",
    height: 340,
    overflow: "hidden",
    marginRight: 20,
  },
  image: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "cover",
    zIndex: -1,
  },
});
