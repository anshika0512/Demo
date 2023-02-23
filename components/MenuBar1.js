import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const MenuBar1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuBar}>
      <Image
        style={[styles.menuBarChild, styles.iconLayout1, styles.aboutPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-26.png")}
      />
      <Text style={[styles.addedApps, styles.heyMaxTypo]}>{`Added Apps `}</Text>
      <Text style={[styles.analytics, styles.heyMaxTypo, styles.heyMaxTypo1]}>
        Analytics
      </Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("DashboardAddedAppsLatest1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-28.png")}
        />
      </Pressable>
      <Pressable
        style={styles.exit}
        onPress={() => navigation.navigate("IPhone1313Pro4")}
      >
        <Text style={styles.exit1Typo}>Exit</Text>
      </Pressable>
      <View style={[styles.menuBarItem, styles.wrapperPosition]} />
      <Text style={[styles.heyMax, styles.heyMaxTypo, styles.heyMaxTypo1]}>
        Hey, Max
      </Text>
      <Image
        style={[styles.menuBarInner, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-10.png")}
      />
      <Text style={[styles.blockScreen, styles.shareTypo]}>Block Screen</Text>
      <Text style={[styles.setting, styles.helpTypo]}>{`Setting `}</Text>
      <Text style={[styles.share, styles.shareTypo]}>{`Share `}</Text>
      <Text style={[styles.help, styles.helpTypo]}>Help</Text>
      <Text style={[styles.feedBack, styles.helpTypo]}>Feed Back</Text>
      <Text style={[styles.about, styles.exit1Typo, styles.aboutPosition]}>
        About
      </Text>
      <Image
        style={[styles.arrowIcon, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-10.png")}
      />
      <Image
        style={[styles.menuBarChild1, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-10.png")}
      />
      <Image
        style={styles.menuBarChild2}
        resizeMode="cover"
        source={require("../assets/arrow-111.png")}
      />
      <Image
        style={[styles.menuBarChild3, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-10.png")}
      />
      <Image
        style={[styles.menuBarChild4, styles.menuChildLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-10.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={[styles.pro2Icon, styles.iconPosition, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/pro-2.png")}
      />
      <Image
        style={[styles.user1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/user-1.png")}
      />
      <Image
        style={styles.menuBarChild5}
        resizeMode="cover"
        source={require("../assets/arrow-10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  aboutPosition: {
    left: "4.11%",
    position: "absolute",
  },
  heyMaxTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  heyMaxTypo1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  wrapperPosition: {
    left: "-0.33%",
    position: "absolute",
  },
  menuChildLayout: {
    left: "75.68%",
    right: "10.12%",
    width: "14.2%",
    height: "2.62%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  shareTypo: {
    height: "3.56%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_2xl,
    left: "4.11%",
    position: "absolute",
  },
  helpTypo: {
    height: "3.44%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_2xl,
    left: "4.11%",
    position: "absolute",
  },
  exit1Typo: {
    width: "25%",
    height: "3.56%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_2xl,
  },
  iconLayout: {
    bottom: "84.44%",
    width: "19.86%",
    height: "6.89%",
  },
  iconPosition: {
    left: "2.33%",
    top: "8.67%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  menuBarChild: {
    height: "3.8%",
    width: "12.67%",
    top: "5.46%",
    right: "83.22%",
    bottom: "90.74%",
  },
  addedApps: {
    width: "49.66%",
    top: "11.4%",
    color: Color.black,
    left: "2.4%",
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_2xl,
  },
  analytics: {
    width: "33.22%",
    top: "12.11%",
    left: "66.78%",
    fontSize: FontSize.size_base,
    color: "rgba(0, 0, 0, 0.6)",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: "4.39%",
    right: "1.02%",
    bottom: "-4.28%",
    width: "99.32%",
    height: "99.88%",
  },
  exit: {
    left: "4%",
    top: "75.42%",
    position: "absolute",
  },
  menuBarItem: {
    height: "15.91%",
    width: "100.33%",
    top: "0%",
    right: "0%",
    bottom: "84.09%",
    backgroundColor: Color.steelblue_200,
  },
  heyMax: {
    width: "44.18%",
    top: "10.45%",
    left: "25.68%",
    color: Color.white,
    fontSize: FontSize.size_2xl,
    fontWeight: "700",
  },
  menuBarInner: {
    top: "19.35%",
    bottom: "78.02%",
  },
  blockScreen: {
    width: "52.74%",
    top: "18.76%",
  },
  setting: {
    width: "29.45%",
    top: "28.27%",
  },
  share: {
    width: "23.63%",
    top: "37.65%",
  },
  help: {
    width: "18.49%",
    top: "47.15%",
  },
  feedBack: {
    width: "41.44%",
    top: "56.53%",
  },
  about: {
    top: "65.91%",
  },
  arrowIcon: {
    top: "29.09%",
    bottom: "68.28%",
  },
  menuBarChild1: {
    top: "38.59%",
    bottom: "58.78%",
  },
  menuBarChild2: {
    width: "13.86%",
    top: "48.69%",
    bottom: "48.69%",
    left: "76.03%",
    right: "10.12%",
    height: "2.62%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  menuBarChild3: {
    top: "66.74%",
    bottom: "30.64%",
  },
  menuBarChild4: {
    top: "57%",
    bottom: "40.37%",
  },
  ellipseIcon: {
    right: "77.74%",
    top: "8.67%",
    bottom: "84.44%",
    width: "19.86%",
    height: "6.89%",
    left: "2.4%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  pro2Icon: {
    right: "77.8%",
    borderRadius: 750,
    bottom: "84.44%",
    width: "19.86%",
    height: "6.89%",
    left: "2.33%",
  },
  user1Icon: {
    height: "7.01%",
    width: "20%",
    right: "77.67%",
    bottom: "84.32%",
  },
  menuBarChild5: {
    top: "75.89%",
    right: "11.45%",
    bottom: "21.49%",
    left: "74.35%",
    width: "14.2%",
    height: "2.62%",
    overflow: "hidden",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  menuBar: {
    width: 300,
    height: 842,
    maxHeight: "100%",
    maxWidth: "100%",
  },
});

export default MenuBar1;
