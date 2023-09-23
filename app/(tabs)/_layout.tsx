import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { SvgXml } from "react-native-svg";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

//import icons
import {
  HomeIcon,
  HomeActiveIcon,
  SavedIcon,
  SavedActiveIcon,
  ExploreIcon,
  ExploreActiveIcon,
  SettingIcon,
  SettingActiveIcon,
} from "../../assets/icons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

const navigationTabs: {
  title: string;
  screenName: string;
  icon: string;
  active: string;
}[] = [
  {
    title: "Home",
    screenName: "index",
    icon: HomeIcon,
    active: HomeActiveIcon,
  },
  {
    title: "Saved",
    screenName: "saved",
    icon: SavedIcon,
    active: SavedActiveIcon,
  },
  {
    title: "Explore",
    screenName: "explore",
    icon: ExploreIcon,
    active: ExploreActiveIcon,
  },
  {
    title: "Setting",
    screenName: "setting",
    icon: SettingIcon,
    active: SettingActiveIcon,
  },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          position: "absolute",
          alignSelf: "center",
          display: "flex",
          borderRadius: 20,
          borderTopColor: "transparent",
          overflow: "hidden",
          backgroundColor: "transparent",
        },
        tabBarBackground: () => (
          <BlurView
            tint={colorScheme === "dark" ? "dark" : "light"}
            intensity={100}
            style={[StyleSheet.absoluteFill]}
          />
        ),
      }}
    >
      {navigationTabs.map(({ title, screenName, icon, active }) => (
        <Tabs.Screen
          key={screenName}
          name={screenName}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <SvgXml
                xml={focused ? active : icon}
                width={size}
                height={size}
                fill={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
