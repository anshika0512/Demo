import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const IPhone13ProMax6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax6}>
      <Image
        style={[styles.iphone13ProMax6Child, styles.wrapperPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-39.png")}
      />
      <Image
        style={styles.iphone13ProMax6Item}
        resizeMode="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={styles.iphone13ProMax6Inner}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.digidost, styles.digidostFlexBox]}>Digital-Khushi</Text>
      <View style={[styles.vectorParent, styles.wrapperLayout]}>
        <Pressable
          style={[styles.wrapperLayout, styles.wrapperPosition]}
          onPress={() => navigation.navigate("IPhone13ProMax3")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/rectangle-6.png")}
          />
        </Pressable>
        <Text style={[styles.getStarted, styles.digidostFlexBox]}>
          Get Started
        </Text>
      </View>
      <View style={styles.notifications}>
        <Image
          style={[styles.signalIcon, styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/signal.png")}
        />
        <Image
          style={[
            styles.batteryThreeQuartersIcon,
            styles.iconLayout,
            styles.iconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.am, styles.amTypo]}>8:00 pm</Text>
      </View>
      <Text style={[styles.yourDigitalFriend, styles.amTypo]}>
        “ Your Digital Friend ”
      </Text>
      <View
        style={[styles.takingABreakFromSocialMedParent, styles.takingLayout]}
      >
        <Image
          style={[styles.takingABreakFromSocialMedIcon, styles.takingLayout]}
          resizeMode="cover"
          source={require("../assets/takingabreakfromsocialmediaremovebg-1.png")}
        />
        <Image
          style={styles.facebook4Icon}
          resizeMode="cover"
          source={require("../assets/facebook-4.png")}
        />
        <Image
          style={styles.instagramIcon1}
          resizeMode="cover"
          source={require("../assets/instagram-icon-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    left: 0,
    top: 0,
  },
  digidostFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  wrapperLayout: {
    height: 80,
    width: 318,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.51%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    bottom: "0%",
    top: "0%",
    maxWidth: "100%",
    width: "7.51%",
    height: "100%",
  },
  amTypo: {
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  takingLayout: {
    height: 258,
    width: 373,
    position: "absolute",
  },
  iphone13ProMax6Child: {
    width: 390,
    position: "absolute",
    height: 844,
    left: 0,
  },
  iphone13ProMax6Item: {
    top: 1074,
    left: -191,
    width: 644,
    height: 468,
    opacity: 0.6,
    position: "absolute",
  },
  iphone13ProMax6Inner: {
    top: 264,
    left: -1242,
    width: 805,
    height: 413,
    position: "absolute",
  },
  digidost: {
    top: 119,
    left: 35,
    fontSize: 40,
    lineHeight: 100,
    fontFamily: FontFamily.abrilFatfaceRegular,
    color: "#110d59",
    width: 436,
    height: 86,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_lg,
    width: "100%",
  },
  getStarted: {
    top: 14,
    left: 46,
    fontSize: FontSize.size_8xl,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.white,
  },
  vectorParent: {
    top: 691,
    left: 34,
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
    maxWidth: "100%",
    width: "7.51%",
  },
  am: {
    left: "3.3%",
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interBold,
    color: Color.black,
    top: "16%",
  },
  notifications: {
    top: 5,
    left: 14,
    width: 363,
    height: 30,
    position: "absolute",
  },
  yourDigitalFriend: {
    top: 600,
    left: 13,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.montserratBold,
    color: "rgba(17, 13, 89, 0.99)",
  },
  takingABreakFromSocialMedIcon: {
    left: 8,
    top: 0,
    width: 373,
  },
  facebook4Icon: {
    top: 155,
    left: 32,
    width: 39,
    height: 38,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  instagramIcon1: {
    top: 135,
    left: 88,
    width: 32,
    height: 32,
    position: "absolute",
  },
  takingABreakFromSocialMedParent: {
    top: 290,
    left: -8,
  },
  iphone13ProMax6: {
    borderRadius: Border.br_sm,
    backgroundColor: "#59c5e7",
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 844,
  },
});

export default IPhone13ProMax6;
