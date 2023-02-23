import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1313Pro4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone1313Pro4}>
      <View style={[styles.notifications, styles.notificationsPosition]}>
        <Image
          style={[styles.signalIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/signal13.png")}
        />
        <Image
          style={[styles.batteryThreeQuartersIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters13.png")}
        />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector59.png")}
        />
        <Text style={styles.am}>8:00 pm</Text>
      </View>
      <Image
        style={[styles.iphoneHomescreen1Icon, styles.notificationsPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-homescreen-1.png")}
      />
      <Text style={[styles.instagram, styles.digidostTypo]}>INSTAGRAM</Text>
      <View style={styles.iphone1313Pro4Child} />
      <Pressable
        style={styles.whatsappIconLogoBdc0a8063b}
        onPress={() => navigation.navigate("INSTAGRAM1")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/whatsappiconlogobdc0a8063bseeklogo-41.png")}
        />
      </Pressable>
      <Text style={[styles.digidost, styles.digidostTypo]}>Digidost</Text>
      <Pressable
        style={styles.screenshot20221015000102}
        onPress={() => navigation.navigate("IPhone13ProMax6")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/screenshot-20221015-000102-4-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationsPosition: {
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    width: "7.51%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  digidostTypo: {
    color: Color.white,
    fontFamily: FontFamily.openSansSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
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
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: "left",
    top: "16%",
    position: "absolute",
  },
  notifications: {
    left: 12,
    width: 366,
    height: 30,
  },
  iphoneHomescreen1Icon: {
    left: 0,
    borderRadius: Border.br_lg,
    width: 390,
    height: 844,
    top: 0,
  },
  instagram: {
    top: 653,
    left: 117,
    width: 72,
    height: 12,
  },
  iphone1313Pro4Child: {
    top: 596,
    left: 119,
    borderRadius: Border.br_4xs,
    backgroundColor: "#fffafa",
    width: 52,
    height: 52,
    position: "absolute",
  },
  whatsappIconLogoBdc0a8063b: {
    left: 110,
    top: 592,
    width: 71,
    height: 60,
    position: "absolute",
  },
  digidost: {
    top: 654,
    left: 34,
    width: 58,
    height: 11,
  },
  icon1: {
    borderRadius: Border.br_3xs,
  },
  screenshot20221015000102: {
    left: 27,
    top: 595,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1313Pro4: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 844,
  },
});

export default IPhone1313Pro4;
