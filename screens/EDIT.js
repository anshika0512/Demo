import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const EDIT = () => {
  return (
    <View style={styles.edit}>
      <View style={styles.notifications}>
        <Image
          style={[styles.signalIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/signal7.png")}
        />
        <Image
          style={[styles.batteryThreeQuartersIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters7.png")}
        />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector30.png")}
        />
        <Text style={styles.am}>8:00 pm</Text>
      </View>
      <View style={styles.editChild} />
      <Image
        style={styles.editItem}
        resizeMode="cover"
        source={require("../assets/line-4.png")}
      />
      <View style={[styles.editInner, styles.editChildShadowBox]} />
      <View style={[styles.rectangleView, styles.editChildShadowBox]} />
      <View style={[styles.editChild1, styles.editChildShadowBox]} />
      <View style={[styles.editChild2, styles.editChildShadowBox]} />
      <Text style={styles.blockAppEdit}>Block App Edit</Text>
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-19.png")}
      />
      <View style={[styles.editChild3, styles.editChildShadowBox]} />
      <Text style={[styles.usageLimit, styles.repeatTypo]}>USAGE LIMIT</Text>
      <Text
        style={[styles.specificTimeInterval, styles.repeatTypo]}
      >{`SPECIFIC TIME INTERVAL `}</Text>
      <Text style={[styles.numberOfLaunches, styles.repeatTypo]}>
        NUMBER OF LAUNCHES
      </Text>
      <Text style={[styles.saveAndLock, styles.repeatTypo]}>SAVE AND LOCK</Text>
      <Text style={[styles.repeat, styles.repeatTypo]}>REPEAT</Text>
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-12.png")}
      />
      <Text style={[styles.daysActive, styles.repeatTypo]}>DAYS ACTIVE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    width: "7.51%",
    height: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  editChildShadowBox: {
    height: 55,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.black,
    left: 25,
    right: 25,
    position: "absolute",
    borderRadius: Border.br_lg,
  },
  repeatTypo: {
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
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
    top: "16%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.51%",
    position: "absolute",
    overflow: "hidden",
  },
  am: {
    left: "3.3%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: "16%",
    position: "absolute",
  },
  notifications: {
    top: 12,
    left: 18,
    width: 361,
    height: 30,
    position: "absolute",
  },
  editChild: {
    top: 1024,
    left: 541,
    backgroundColor: "#eadada",
    width: 73,
    height: 275,
    position: "absolute",
  },
  editItem: {
    top: 572,
    left: 46,
    width: 289,
    height: 4,
    position: "absolute",
  },
  editInner: {
    top: 136,
  },
  rectangleView: {
    top: 308,
  },
  editChild1: {
    top: 481,
  },
  editChild2: {
    top: 400,
  },
  blockAppEdit: {
    top: 64,
    left: 87,
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  arrowIcon: {
    top: 67,
    left: 26,
    width: 47,
    height: 22,
    position: "absolute",
  },
  editChild3: {
    top: 217,
  },
  usageLimit: {
    top: 150,
    left: 112,
  },
  specificTimeInterval: {
    top: 322,
    left: 56,
  },
  numberOfLaunches: {
    top: 413,
    left: 50,
  },
  saveAndLock: {
    top: 494,
    left: 100,
  },
  repeat: {
    top: 234,
    left: 68,
  },
  lineIcon: {
    top: 238,
    right: 218,
    left: 165,
    height: 19,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  daysActive: {
    top: 237,
    left: 179,
  },
  edit: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_lg,
  },
});

export default EDIT;
