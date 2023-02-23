import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddApp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addApp}>
      <Image
        style={[styles.addAppChild, styles.addPosition, styles.addLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.addAppItem, styles.addPosition, styles.addLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.addAppInner, styles.addPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-108.png")}
      />
      <View style={styles.component15}>
        <View
          style={[
            styles.component15Child,
            styles.component15Bg,
            styles.component15Position1,
          ]}
        />
        <View
          style={[
            styles.component15Item,
            styles.component15Position,
            styles.component15Bg,
          ]}
        />
        <View
          style={[
            styles.component15Inner,
            styles.iconPosition,
            styles.component15Position,
            styles.component15Position1,
          ]}
        />
      </View>
      <View style={[styles.rectangleView, styles.addAppChild2Position]} />
      <View
        style={[
          styles.addAppChild1,
          styles.addChildBg,
          styles.addAppChild1Position,
        ]}
      />
      <Pressable
        style={[
          styles.rectanglePressable,
          styles.addChildBg,
          styles.addChildPosition,
        ]}
        onPress={() => navigation.navigate("AddingProcess")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("DashboardAddedAppsLatest1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Text style={[styles.addApps, styles.addAppsLayout, styles.amTypo]}>
        Add Apps
      </Text>
      <View style={[styles.notifications, styles.addAppsLayout]}>
        <Image
          style={[
            styles.signalIcon,
            styles.iconLayout2,
            styles.iconPosition,
            styles.iconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/signal1.png")}
        />
        <Image
          style={[
            styles.batteryThreeQuartersIcon,
            styles.iconLayout2,
            styles.iconPosition,
            styles.iconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters1.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.amPosition, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.am, styles.amPosition, styles.amTypo]}>
          8:00 pm
        </Text>
      </View>
      <View style={[styles.addAppChild2, styles.addAppChild2Position]} />
      <Text style={[styles.text, styles.textTypo]}>
        ........................
      </Text>
      <Pressable
        style={styles.recommended}
        onPress={() => navigation.navigate("DashboardAnalytics")}
      >
        <Text style={styles.allAppsTypo}>Recommended</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={[styles.facebook, styles.facebookTypo]}> Facebook</Text>
      <Text style={[styles.snapchat, styles.facebookTypo]}> Snapchat</Text>
      <View
        style={[
          styles.addAppChild3,
          styles.addChildBg,
          styles.addChildPosition,
        ]}
      />
      <Text style={[styles.twitter, styles.twitterTypo]}>Twitter</Text>
      <Text style={[styles.linkedin, styles.twitterTypo]}>Linkedin</Text>
      <View
        style={[
          styles.addAppChild4,
          styles.addChildBg,
          styles.addChildPosition,
        ]}
      />
      <View
        style={[
          styles.addAppChild5,
          styles.addChildBg,
          styles.addChildPosition,
        ]}
      />
      <View style={[styles.addAppChild6Position, styles.addChildBg]} />
      <Text style={[styles.text1, styles.textTypo]}>
        ........................
      </Text>
      <Text style={[styles.allApps, styles.allAppsTypo]}>All Apps</Text>
      <Image
        style={[styles.iconsaxlinearsort, styles.addAppsLayout]}
        resizeMode="cover"
        source={require("../assets/iconsaxlinearsort.png")}
      />
      <Image
        style={styles.iconsaxlinearsort1}
        resizeMode="cover"
        source={require("../assets/iconsaxlinearsort1.png")}
      />
      <Image
        style={[
          styles.facebook2Icon,
          styles.iconLayout,
          styles.addChildPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/facebook-21.png")}
      />
      <Image
        style={[styles.snapchat1Icon, styles.addAppChild1Position]}
        resizeMode="cover"
        source={require("../assets/snapchat-11.png")}
      />
      <Image
        style={[styles.you1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/you-1.png")}
      />
      <Image
        style={[styles.twit1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/twit-1.png")}
      />
      <Image
        style={[styles.linkdin1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/linkdin-1.png")}
      />
      <Text style={[styles.youtube, styles.twitterTypo]}>Youtube</Text>
      <Text style={[styles.h29M, styles.m2Typo]}>{` 1h 29 m `}</Text>
      <Text style={[styles.m, styles.mTypo]}>{` 25 m `}</Text>
      <Text style={[styles.m1, styles.mTypo]}>{` 35 m `}</Text>
      <Text style={[styles.m2, styles.m2Typo]}>45 m</Text>
      <Text style={[styles.m3, styles.m3Typo]}>{` 55 m `}</Text>
      <Text style={[styles.m4, styles.mTypo]}>22 m</Text>
      <Text style={[styles.m5, styles.m3Typo]}>15 m</Text>
      <Image
        style={[styles.telegram1Icon, styles.addAppChild6Position]}
        resizeMode="cover"
        source={require("../assets/telegram-1.png")}
      />
      <Text style={[styles.telegram, styles.twitterTypo]}>Telegram</Text>
      <Text style={[styles.telegram, styles.twitterTypo]}>T</Text>
      <View
        style={[
          styles.addAppChild7,
          styles.addAppChild7Position,
          styles.addChildBg,
        ]}
      />
      <Text style={[styles.discord, styles.twitterTypo]}>Discord</Text>
      <Image
        style={[styles.addAppChild7Position, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/disdord-1.png")}
      />
      <View style={styles.bellSlash} />
    </View>
  );
};

const styles = StyleSheet.create({
  addPosition: {
    display: "none",
    position: "absolute",
  },
  addLayout: {
    height: 434,
    width: 574,
    display: "none",
  },
  component15Bg: {
    backgroundColor: Color.steelblue_200,
    position: "absolute",
  },
  component15Position1: {
    left: "0%",
    width: "100%",
  },
  component15Position: {
    top: "14.81%",
    right: "0%",
  },
  iconPosition: {
    bottom: "0%",
    position: "absolute",
  },
  addAppChild2Position: {
    width: 366,
    backgroundColor: Color.gray_500,
    left: 13,
    position: "absolute",
  },
  addChildBg: {
    opacity: 0.2,
    backgroundColor: Color.silver,
    width: 366,
  },
  addAppChild1Position: {
    top: 294,
    height: 50,
    left: 13,
    position: "absolute",
  },
  addChildPosition: {
    left: 13,
    position: "absolute",
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  addAppsLayout: {
    height: 30,
    position: "absolute",
  },
  amTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconLayout2: {
    width: "7.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition1: {
    top: "0%",
    width: "7.51%",
    height: "100%",
    bottom: "0%",
  },
  amPosition: {
    top: "16%",
    position: "absolute",
  },
  textTypo: {
    height: 19,
    width: 144,
    color: Color.gray_600,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  facebookTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  twitterTypo: {
    left: 74,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  allAppsTypo: {
    width: 160,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconLayout: {
    height: 51,
    width: 51,
    borderRadius: Border.br_2xs,
  },
  iconLayout1: {
    width: 51,
    height: 50,
    left: 13,
    position: "absolute",
  },
  m2Typo: {
    height: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  mTypo: {
    width: 55,
    left: 326,
    height: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  m3Typo: {
    left: 324,
    width: 55,
    height: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  addAppChild6Position: {
    top: 355,
    height: 50,
    left: 13,
    position: "absolute",
  },
  addAppChild7Position: {
    top: 728,
    left: 13,
    position: "absolute",
  },
  addAppChild: {
    top: 589,
    left: -51,
  },
  addAppItem: {
    top: -90,
    left: 114,
  },
  addAppInner: {
    top: 430,
    left: 141,
    width: 338,
    height: 425,
    opacity: 0.6,
  },
  component15Child: {
    height: "14.81%",
    bottom: "85.19%",
    borderBottomLeftRadius: Border.br_2xl,
    right: "0%",
    backgroundColor: Color.steelblue_200,
    left: "0%",
    top: "0%",
  },
  component15Item: {
    height: "18.72%",
    width: "77.24%",
    bottom: "66.47%",
    left: "22.76%",
    borderBottomLeftRadius: Border.br_xl,
  },
  component15Inner: {
    height: "85.19%",
    borderTopRightRadius: Border.br_3xl,
    backgroundColor: Color.white,
  },
  component15: {
    top: 0,
    left: 0,
    width: 391,
    position: "absolute",
    height: 844,
  },
  rectangleView: {
    top: 155,
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_md,
    borderBottomRightRadius: Border.br_sm,
    borderBottomLeftRadius: Border.br_sm,
    height: 282,
  },
  addAppChild1: {
    height: 50,
  },
  rectanglePressable: {
    top: 234,
    height: 50,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "3.33%",
    top: "5.92%",
    right: "89.74%",
    bottom: "90.88%",
    width: "6.92%",
    height: "3.2%",
    position: "absolute",
  },
  addApps: {
    top: 47,
    left: 52,
    fontSize: FontSize.size_4xl,
    width: 166,
  },
  signalIcon: {
    right: "11.41%",
    left: "81.08%",
    height: "100%",
  },
  batteryThreeQuartersIcon: {
    right: "0.9%",
    left: "91.59%",
    height: "100%",
  },
  vectorIcon: {
    height: "70%",
    right: "21.92%",
    bottom: "14%",
    left: "70.57%",
  },
  am: {
    left: "3.3%",
    fontSize: FontSize.size_5xs,
  },
  notifications: {
    top: 1,
    left: 3,
    width: 386,
  },
  addAppChild2: {
    top: 467,
    height: 343,
    borderRadius: Border.br_sm,
  },
  text: {
    left: 147,
    top: 479,
  },
  recommended: {
    left: 30,
    top: 180,
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.84%",
    width: "6.15%",
    top: "57.23%",
    right: "6.41%",
    bottom: "39.93%",
    left: "87.44%",
    position: "absolute",
  },
  facebook: {
    top: 248,
    left: 67,
    fontSize: FontSize.size_xl,
  },
  snapchat: {
    top: 305,
    left: 70,
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  addAppChild3: {
    top: 592,
    height: 50,
  },
  twitter: {
    top: 612,
  },
  linkedin: {
    top: 674,
  },
  addAppChild4: {
    top: 661,
    height: 50,
  },
  addAppChild5: {
    top: 532,
    height: 50,
  },
  text1: {
    top: 176,
    left: 186,
  },
  allApps: {
    top: 483,
    left: 33,
    position: "absolute",
  },
  iconsaxlinearsort: {
    top: 178,
    left: 336,
    width: 30,
    overflow: "hidden",
  },
  iconsaxlinearsort1: {
    left: 297,
    width: 32,
    height: 32,
    top: 479,
    position: "absolute",
    overflow: "hidden",
  },
  facebook2Icon: {
    top: 233,
  },
  snapchat1Icon: {
    width: 50,
    borderRadius: Border.br_2xs,
    height: 50,
  },
  you1Icon: {
    borderRadius: Border.br_2xs,
    top: 532,
  },
  twit1Icon: {
    top: 592,
  },
  linkdin1Icon: {
    top: 659,
    borderRadius: Border.br_2xs,
  },
  youtube: {
    top: 545,
  },
  h29M: {
    top: 262,
    left: 300,
    width: 80,
  },
  m: {
    top: 319,
  },
  m1: {
    top: 374,
  },
  m2: {
    top: 558,
    left: 328,
    width: 63,
  },
  m3: {
    top: 621,
  },
  m4: {
    top: 685,
  },
  m5: {
    top: 749,
  },
  telegram1Icon: {
    width: 57,
    borderRadius: Border.br_2xs,
  },
  telegram: {
    top: 369,
  },
  addAppChild7: {
    height: 50,
  },
  discord: {
    top: 740,
  },
  bellSlash: {
    top: 419,
    left: 256,
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  addApp: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
  },
});

export default AddApp;
