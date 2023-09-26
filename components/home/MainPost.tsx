import { StyleSheet, Text, View, ImageBackground } from "react-native";

interface MainPostProps {
  from: string;
  image: any;
  title: string;
  comments: string;
  share: string;
}

const MainPost = ({ comments, from, image, share, title }: MainPostProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text>{from}</Text>
        <Text>{title}</Text>
        <Text>{comments}</Text>
        <Text>{share}</Text>
      </ImageBackground>
    </View>
  );
};

export default MainPost;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 700,
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
