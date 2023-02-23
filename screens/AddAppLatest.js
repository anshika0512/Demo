import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddAppLatest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addAppLatest}>
      <Image
        style={[styles.addAppLatestChild, styles.addPosition, styles.addLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.addAppLatestItem, styles.addPosition, styles.addLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.addAppLatestInner, styles.addPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-101.png")}
      />
      <View style={[styles.component15, styles.component15Position2]}>
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
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[
          styles.addAppLatestChild1,
          styles.addChildBg,
          styles.addChildPosition,
        ]}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("DashboardAddedAppsLatest")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
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
            styles.iconLayout,
            styles.iconPosition,
            styles.iconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/signal1.png")}
        />
        <Image
          style={[
            styles.batteryThreeQuartersIcon,
            styles.iconLayout,
            styles.iconPosition,
            styles.iconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters1.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.amPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.am, styles.amPosition, styles.amTypo]}>
          8:00 pm
        </Text>
      </View>
      <View style={[styles.addAppLatestChild2, styles.rectangleViewPosition]} />
      <Text style={[styles.text, styles.textTypo]}>
        ........................
      </Text>
      <Text style={[styles.recommended, styles.allAppsTypo]}>Recommended</Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={styles.snapchat}> Snapchat</Text>
      <View style={[styles.twit1IconPosition, styles.addChildBg]} />
      <Text style={[styles.twitter, styles.twitterTypo]}>Twitter</Text>
      <Text style={[styles.linkedin, styles.twitterTypo]}>Linkedin</Text>
      <View
        style={[
          styles.addAppLatestChild4,
          styles.addChildBg,
          styles.addChildPosition,
        ]}
      />
      <View style={[styles.you1IconPosition, styles.addChildBg]} />
      <View style={[styles.telegram1IconPosition, styles.addChildBg]} />
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
        style={[styles.snapchat1Icon, styles.component15Position2]}
        resizeMode="cover"
        source={require("../assets/snapchat-1.png")}
      />
      <Image
        style={[styles.you1Icon, styles.you1IconPosition]}
        resizeMode="cover"
        source={require("../assets/you-1.png")}
      />
      <Image
        style={[styles.twit1Icon, styles.twit1IconPosition]}
        resizeMode="cover"
        source={require("../assets/twit-1.png")}
      />
      <Image
        style={[styles.linkdin1Icon, styles.addChildPosition]}
        resizeMode="cover"
        source={require("../assets/linkdin-1.png")}
      />
      <Text style={[styles.youtube, styles.twitterTypo]}>Youtube</Text>
      <Text style={[styles.m, styles.mTypo, styles.mLayout]}>{` 25 m `}</Text>
      <Text style={[styles.m1, styles.mTypo, styles.mLayout]}>{` 35 m `}</Text>
      <Text style={[styles.m2, styles.mTypo]}>45 m</Text>
      <Text style={[styles.m3, styles.m3Typo]}>{` 55 m `}</Text>
      <Text style={[styles.m4, styles.mTypo, styles.mLayout]}>22 m</Text>
      <Text style={[styles.m5, styles.m3Typo]}>15 m</Text>
      <Image
        style={[styles.telegram1Icon, styles.telegram1IconPosition]}
        resizeMode="cover"
        source={require("../assets/telegram-1.png")}
      />
      <Text style={[styles.telegram, styles.twitterTypo]}>Telegram</Text>
      <Text style={[styles.telegram, styles.twitterTypo]}>T</Text>
      <View
        style={[
          styles.addAppLatestChild7,
          styles.disdord1IconPosition,
          styles.addChildBg,
        ]}
      />
      <Text style={[styles.discord, styles.twitterTypo]}>Discord</Text>
      <Image
        style={[styles.disdord1Icon, styles.disdord1IconPosition]}
        resizeMode="cover"
        source={require("../assets/disdord-1.png")}
      />
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
  component15Position2: {
    left: 0,
    position: "absolute",
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
  rectangleViewPosition: {
    width: 366,
    backgroundColor: Color.gray_500,
    left: 11,
    position: "absolute",
  },
  addChildBg: {
    opacity: 0.2,
    backgroundColor: Color.silver,
    width: 366,
  },
  addChildPosition: {
    left: 11,
    height: 50,
    position: "absolute",
  },
  iconLayout1: {
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
  iconLayout: {
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
  allAppsTypo: {
    width: 160,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  twitterTypo: {
    left: 72,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  you1IconPosition: {
    top: 536,
    height: 50,
    left: 11,
    position: "absolute",
  },
  twit1IconPosition: {
    top: 596,
    height: 50,
    left: 11,
    position: "absolute",
  },
  mTypo: {
    height: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  mLayout: {
    width: 55,
    left: 324,
    height: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  m3Typo: {
    left: 322,
    height: 17,
    width: 55,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  telegram1IconPosition: {
    top: 287,
    height: 50,
    left: 11,
    position: "absolute",
  },
  disdord1IconPosition: {
    top: 732,
    left: 11,
    position: "absolute",
  },
  addAppLatestChild: {
    top: 589,
    left: -51,
  },
  addAppLatestItem: {
    top: -90,
    left: 114,
  },
  addAppLatestInner: {
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
    width: 391,
    height: 844,
  },
  rectangleView: {
    top: 159,
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_md,
    borderBottomRightRadius: Border.br_sm,
    borderBottomLeftRadius: Border.br_sm,
    height: 282,
  },
  addAppLatestChild1: {
    top: 226,
    height: 50,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "2.82%",
    top: "6.16%",
    right: "90.26%",
    bottom: "90.64%",
    width: "6.92%",
    height: "3.2%",
    position: "absolute",
  },
  addApps: {
    top: 49,
    left: 50,
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
    top: 5,
    left: 1,
    width: 386,
  },
  addAppLatestChild2: {
    top: 471,
    height: 343,
    borderRadius: Border.br_sm,
  },
  text: {
    left: 145,
    top: 483,
  },
  recommended: {
    top: 184,
    left: 28,
  },
  vectorIcon1: {
    height: "2.84%",
    width: "6.15%",
    top: "57.7%",
    right: "6.92%",
    bottom: "39.45%",
    left: "86.92%",
    position: "absolute",
  },
  snapchat: {
    top: 237,
    left: 68,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  twitter: {
    top: 616,
  },
  linkedin: {
    top: 678,
  },
  addAppLatestChild4: {
    top: 665,
    height: 50,
  },
  text1: {
    top: 180,
    left: 184,
  },
  allApps: {
    top: 487,
    left: 31,
  },
  iconsaxlinearsort: {
    top: 182,
    left: 334,
    width: 30,
    overflow: "hidden",
  },
  iconsaxlinearsort1: {
    left: 295,
    width: 32,
    height: 32,
    top: 483,
    position: "absolute",
    overflow: "hidden",
  },
  snapchat1Icon: {
    top: 214,
    width: 110,
    height: 74,
    borderRadius: Border.br_2xs,
  },
  you1Icon: {
    width: 51,
    borderRadius: Border.br_2xs,
  },
  twit1Icon: {
    width: 51,
  },
  linkdin1Icon: {
    top: 663,
    width: 51,
    borderRadius: Border.br_2xs,
    height: 50,
  },
  youtube: {
    top: 549,
  },
  m: {
    top: 251,
  },
  m1: {
    top: 306,
  },
  m2: {
    top: 562,
    left: 326,
    width: 63,
    height: 17,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
  },
  m3: {
    top: 625,
  },
  m4: {
    top: 689,
  },
  m5: {
    top: 753,
  },
  telegram1Icon: {
    width: 57,
    borderRadius: Border.br_2xs,
  },
  telegram: {
    top: 301,
  },
  addAppLatestChild7: {
    height: 50,
  },
  discord: {
    top: 744,
  },
  disdord1Icon: {
    height: 51,
    width: 51,
    borderRadius: Border.br_2xs,
  },
  addAppLatest: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
  },
});

export default AddAppLatest;
