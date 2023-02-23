import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const INSTAGRAM1 = () => {
  return (
    <View style={styles.instagram1}>
      <View style={styles.img202210170353541Parent}>
        <Image
          style={[styles.img202210170353541Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/img-20221017-035354-1.png")}
        />
        <Image
          style={[styles.img202210170353251Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/img-20221017-035325-1.png")}
        />
      </View>
      <View style={styles.notifications}>
        <Image
          style={[styles.signalIcon, styles.iconLayout, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/signal13.png")}
        />
        <Image
          style={[
            styles.batteryThreeQuartersIcon,
            styles.iconLayout,
            styles.iconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters13.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.amPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector58.png")}
        />
        <Text style={[styles.am, styles.amPosition]}>8:00 pm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 4096,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.51%",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    width: "7.51%",
    position: "absolute",
  },
  amPosition: {
    top: "16%",
    position: "absolute",
  },
  img202210170353541Icon: {
    width: 475,
    top: 0,
    left: 0,
  },
  img202210170353251Icon: {
    top: 4096,
    left: -13,
    width: 399,
  },
  img202210170353541Parent: {
    top: 49,
    width: 390,
    height: 830,
    left: 0,
    position: "absolute",
  },
  signalIcon: {
    right: "11.41%",
    left: "81.08%",
  },
  batteryThreeQuartersIcon: {
    right: "0.9%",
    left: "91.59%",
  },
  vectorIcon: {
    height: "70%",
    right: "21.92%",
    bottom: "14%",
    left: "70.57%",
    maxWidth: "100%",
    width: "7.51%",
    top: "16%",
  },
  am: {
    left: "3.3%",
    fontSize: FontSize.size_5xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: "left",
  },
  notifications: {
    left: 12,
    width: 366,
    height: 30,
    top: 0,
    position: "absolute",
  },
  instagram1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default INSTAGRAM1;
