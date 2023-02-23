import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Usage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.usage}>
      <View style={[styles.component15, styles.component15Position1]}>
        <View
          style={[
            styles.component15Child,
            styles.childPosition,
            styles.childPosition1,
          ]}
        />
        <View style={[styles.component15Item, styles.component15Position]} />
        <View
          style={[
            styles.component15Inner,
            styles.component15Position,
            styles.childPosition,
          ]}
        />
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("DashboardAnalytics")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <View style={[styles.notifications, styles.component15Position1]}>
        <Image
          style={[styles.signalIcon, styles.iconLayout1, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/signal1.png")}
        />
        <Image
          style={[
            styles.batteryThreeQuartersIcon,
            styles.iconLayout1,
            styles.iconPosition1,
          ]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters5.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.am, styles.amTypo, styles.amClr]}>8:00 pm</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector14.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector15.png")}
      />
      <Text
        style={[
          styles.october,
          styles.octoberTypo,
          styles.amClr,
          styles.m6Typo,
        ]}
      >
        17 October
      </Text>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/5-6.png")}
      />
      <Text style={[styles.analytics, styles.amTypo, styles.amClr]}>
        Analytics
      </Text>
      <View style={[styles.vectorParent, styles.screenTimePosition]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-52.png")}
        />
        <Text
          style={[
            styles.screenTime,
            styles.m5Typo1,
            styles.screenTimePosition,
            styles.amTypo,
          ]}
        >
          Screen time
        </Text>
        <View
          style={[styles.frameItem, styles.frameLayout, styles.frameLayout1]}
        />
        <Text style={[styles.allApps, styles.m6Layout]}>All Apps</Text>
        <Text style={[styles.twitter, styles.twitterTypo]}>Twitter</Text>
        <Image
          style={styles.you1Icon}
          resizeMode="cover"
          source={require("../assets/you-11.png")}
        />
        <Image
          style={[styles.twit2Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/twit-2.png")}
        />
        <Text style={[styles.youtube, styles.twitterTypo]}>Youtube</Text>
        <Text style={[styles.h25M, styles.amTypo]}>1h 25 m</Text>
        <Text style={[styles.m, styles.mTypo]}>{` 55 m `}</Text>
        <Text style={[styles.m1, styles.mTypo]}>22 m</Text>
        <Text style={[styles.discord, styles.twitterTypo]}>Discord</Text>
        <Image
          style={[styles.disdord2Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/disdord-2.png")}
        />
        <Text style={[styles.h10M, styles.m5Typo1, styles.amTypo]}>
          4 h 10 m
        </Text>
        <Text style={[styles.text, styles.textTypo]}>
          ........................
        </Text>
        <Text style={[styles.addedApps, styles.addedTypo]}>Added Apps</Text>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector16.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>............</Text>
        <Image
          style={[styles.vectorIcon4, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
        <Text style={[styles.nonAddedApps, styles.addedTypo]}>
          Non Added Apps
        </Text>
        <Image
          style={[styles.iconsaxlinearsort, styles.facebookLayout]}
          resizeMode="cover"
          source={require("../assets/iconsaxlinearsort1.png")}
        />
        <Text style={[styles.h57M, styles.m5Typo]}>4 h 57 m</Text>
        <Text
          style={[
            styles.mMoreThanContainer,
            styles.screenTimePosition,
            styles.octoberTypo,
          ]}
        >
          <Text style={styles.m2}>32 m</Text>
          <Text style={styles.m6Typo}> more than yesterday</Text>
        </Text>
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/4-10.png")}
        />
        <Text style={[styles.instagram, styles.m7Typo]}>Instagram</Text>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameChild1Layout]} />
        <Text style={[styles.m3, styles.m3Typo]}>13 m</Text>
        <Text style={[styles.m4, styles.m3Typo]}>09 m</Text>
        <Text style={[styles.m5, styles.m5Typo, styles.m5Typo1]}>47 m</Text>
        <Text style={[styles.linkedin, styles.twitterTypo]}>Linkedin</Text>
        <Image
          style={[styles.linkdin1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/linkdin-11.png")}
        />
        <Text style={[styles.facebook, styles.facebookLayout, styles.amTypo]}>
          Facebook
        </Text>
        <Image
          style={[styles.facebook4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/facebook-41.png")}
        />
        <Text style={styles.mostUsedApps}>Most used Apps</Text>
        <Text
          style={[styles.m6, styles.m6Layout, styles.m6Typo]}
        >{` 21 m `}</Text>
        <View style={[styles.frameChild1, styles.frameChild1Layout]} />
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
        <View
          style={[styles.frameChild3, styles.frameLayout, styles.frameLayout1]}
        />
        <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
          <LinearGradient
            style={[
              styles.instanceChild,
              styles.childPosition,
              styles.childPosition1,
            ]}
            locations={[
              0.01, 0.18, 0.19, 0.42, 0.42, 0.62, 0.63, 0.77, 0.78, 1,
            ]}
            colors={[
              "#8b0c03",
              "#991313",
              "#9fb11a",
              "#8d9b0d",
              "#10eefc",
              "#0ae5f3",
              "#ce13ed",
              "#d473e3",
              "#b3b3b3",
              "#b3b3b3",
            ]}
          />
        </View>
        <Image
          style={[styles.whatsappIconLogoBdc0a8063b, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/whatsappiconlogobdc0a8063bseeklogo-11.png")}
        />
        <Text style={[styles.whatsapp, styles.m7Typo]}>WhatsApp</Text>
        <View style={[styles.frameChild4, styles.frameChildLayout]} />
        <Text style={[styles.m7, styles.m7Typo]}>25 m</Text>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <LinearGradient
            style={[
              styles.instanceChild,
              styles.childPosition,
              styles.childPosition1,
            ]}
            locations={[
              0.01, 0.18, 0.19, 0.42, 0.42, 0.62, 0.63, 0.77, 0.78, 1,
            ]}
            colors={[
              "#8b0c03",
              "#991313",
              "#9fb11a",
              "#8d9b0d",
              "#10eefc",
              "#0ae5f3",
              "#ce13ed",
              "#d473e3",
              "#b3b3b3",
              "#b3b3b3",
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component15Position1: {
    left: -1,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    width: "100%",
  },
  childPosition1: {
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  component15Position: {
    top: "14.81%",
    right: "0%",
    position: "absolute",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout1: {
    width: "7.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    top: "0%",
    width: "7.51%",
    height: "100%",
    bottom: "0%",
  },
  amTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  amClr: {
    color: Color.white,
    position: "absolute",
  },
  vectorIconPosition: {
    height: 10,
    width: 7,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  octoberTypo: {
    fontSize: FontSize.size_4xs,
    textAlign: "left",
  },
  m6Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  screenTimePosition: {
    left: 16,
    position: "absolute",
  },
  m5Typo1: {
    fontSize: FontSize.size_2xl,
    color: Color.black,
  },
  frameLayout: {
    height: 8,
    position: "absolute",
    borderRadius: Border.br_sm,
  },
  frameLayout1: {
    width: 14,
    height: 8,
  },
  m6Layout: {
    height: 17,
    textAlign: "left",
    position: "absolute",
  },
  twitterTypo: {
    height: 22,
    left: 66,
    fontSize: FontSize.size_base,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconPosition: {
    width: 45,
    left: 12,
    position: "absolute",
  },
  mTypo: {
    height: 16,
    fontSize: FontSize.size_6xs,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  addedTypo: {
    left: 8,
    color: Color.cornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  facebookLayout: {
    height: 32,
    position: "absolute",
  },
  m5Typo: {
    left: 17,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  m7Typo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameChild1Layout: {
    backgroundColor: Color.mediumorchid,
    height: 8,
    width: 14,
    position: "absolute",
    borderRadius: Border.br_sm,
  },
  m3Typo: {
    left: 297,
    textAlign: "center",
    fontSize: FontSize.size_6xs,
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 42,
    left: 19,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  frameChildLayout: {
    backgroundColor: Color.indigo,
    height: 8,
    width: 14,
    position: "absolute",
    borderRadius: Border.br_sm,
  },
  rectangleLayout: {
    width: 1,
    height: 32,
    position: "absolute",
  },
  component15Child: {
    height: "14.81%",
    bottom: "85.19%",
    borderBottomLeftRadius: Border.br_2xl,
    backgroundColor: Color.steelblue_200,
  },
  component15Item: {
    height: "18.72%",
    width: "77.24%",
    bottom: "66.47%",
    left: "22.76%",
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.steelblue_200,
  },
  component15Inner: {
    height: "85.19%",
    borderTopRightRadius: Border.br_3xl,
    bottom: "0%",
    backgroundColor: Color.white,
  },
  component15: {
    width: 391,
    top: 0,
    height: 844,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "2.31%",
    top: "5.92%",
    right: "90.77%",
    bottom: "90.88%",
    width: "6.92%",
    height: "3.2%",
    position: "absolute",
  },
  signalIcon: {
    right: "11.41%",
    left: "81.08%",
    height: "100%",
    bottom: "0%",
  },
  batteryThreeQuartersIcon: {
    right: "0.9%",
    left: "91.59%",
    height: "100%",
    bottom: "0%",
  },
  vectorIcon: {
    height: "70%",
    right: "21.92%",
    bottom: "14%",
    left: "70.57%",
    top: "16%",
  },
  am: {
    left: "3.3%",
    fontSize: FontSize.size_5xs,
    top: "16%",
  },
  notifications: {
    top: 3,
    width: 386,
    height: 30,
  },
  vectorIcon1: {
    marginTop: -321,
    marginLeft: -128,
  },
  vectorIcon2: {
    marginTop: -322,
    marginLeft: 121,
  },
  october: {
    top: 96,
    left: 130,
  },
  icon1: {
    top: 93,
    left: 235,
    width: 26,
    height: 25,
    position: "absolute",
  },
  analytics: {
    top: 48,
    left: 56,
    fontSize: 26,
    width: 149,
  },
  frameChild: {
    left: 0,
    width: 349,
    height: 1000,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_sm,
  },
  screenTime: {
    top: 14,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.black,
  },
  frameItem: {
    top: 830,
    left: 316,
    backgroundColor: Color.gainsboro_100,
  },
  allApps: {
    top: 821,
    width: 165,
    color: Color.cornflowerblue,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    height: 17,
    left: 17,
  },
  twitter: {
    top: 705,
    width: 103,
  },
  you1Icon: {
    top: 641,
    borderRadius: 8,
    height: 29,
    width: 43,
    left: 14,
    position: "absolute",
  },
  twit2Icon: {
    top: 687,
    height: 45,
    borderRadius: Border.br_4xs,
    width: 45,
  },
  youtube: {
    top: 644,
    width: 116,
  },
  h25M: {
    top: 662,
    width: 59,
    height: 15,
    fontSize: FontSize.size_6xs,
    left: 299,
    color: Color.black,
    position: "absolute",
  },
  m: {
    top: 721,
    width: 50,
    left: 298,
  },
  m1: {
    top: 775,
    width: 52,
    left: 299,
  },
  discord: {
    top: 874,
    width: 83,
  },
  disdord2Icon: {
    top: 863,
    borderRadius: 12,
    height: 47,
  },
  h10M: {
    top: 502,
    left: 20,
    width: 112,
    height: 39,
    color: Color.black,
    position: "absolute",
  },
  text: {
    top: 114,
    left: 149,
  },
  addedApps: {
    top: 115,
    fontSize: FontSize.size_lg,
    width: 160,
  },
  vectorIcon3: {
    height: "1.62%",
    width: "7.14%",
    top: "19.51%",
    right: "7.05%",
    bottom: "78.87%",
    left: "85.82%",
    position: "absolute",
  },
  text1: {
    left: 189,
    top: 468,
  },
  vectorIcon4: {
    height: "2.57%",
    width: "6.7%",
    top: "70.26%",
    right: "3.02%",
    bottom: "27.17%",
    left: "90.27%",
    position: "absolute",
  },
  nonAddedApps: {
    top: 472,
    width: 181,
    fontSize: FontSize.size_base,
    left: 8,
  },
  iconsaxlinearsort: {
    left: 274,
    width: 32,
    top: 468,
    overflow: "hidden",
  },
  h57M: {
    top: 44,
    fontSize: FontSize.size_4xl,
    color: Color.darkblue_200,
    width: 146,
    height: 30,
  },
  m2: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
  },
  mMoreThanContainer: {
    top: 79,
    color: Color.firebrick,
  },
  icon2: {
    top: 312,
    height: 41,
    width: 42,
    left: 19,
    position: "absolute",
  },
  instagram: {
    top: 327,
    left: 74,
    fontSize: FontSize.size_xs,
  },
  frameInner: {
    top: 323,
    backgroundColor: Color.brown,
    width: 13,
    left: 313,
  },
  rectangleView: {
    top: 377,
    left: 313,
  },
  m3: {
    top: 333,
  },
  m4: {
    top: 387,
  },
  m5: {
    top: 147,
    width: 117,
    height: 36,
    color: Color.black,
  },
  linkedin: {
    top: 762,
    width: 85,
  },
  linkdin1Icon: {
    top: 748,
    borderRadius: Border.br_2xs,
    height: 46,
  },
  facebook: {
    top: 383,
    left: 77,
    width: 106,
    fontSize: FontSize.size_xs,
    color: Color.black,
  },
  facebook4Icon: {
    top: 371,
    width: 42,
  },
  mostUsedApps: {
    top: 607,
    left: 12,
    height: 17,
    width: 165,
    color: Color.cornflowerblue,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  m6: {
    top: 879,
    width: 55,
    left: 298,
    fontSize: FontSize.size_6xs,
    color: Color.black,
  },
  frameChild1: {
    top: 766,
    left: 314,
  },
  frameChild2: {
    top: 711,
    left: 317,
  },
  frameChild3: {
    top: 651,
    left: 319,
    backgroundColor: "#d448ef",
  },
  instanceChild: {
    backgroundColor: "transparent",
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_sm,
  },
  rectangleWrapper: {
    top: 194,
    left: 26,
  },
  whatsappIconLogoBdc0a8063b: {
    top: 255,
    width: 43,
  },
  whatsapp: {
    top: 269,
    left: 75,
    fontSize: FontSize.size_xs,
  },
  frameChild4: {
    top: 264,
    left: 314,
  },
  m7: {
    top: 272,
    fontSize: FontSize.size_6xs,
    left: 299,
  },
  rectangleContainer: {
    top: 553,
    left: 14,
  },
  vectorParent: {
    top: 149,
    width: 348,
    height: 677,
    borderRadius: Border.br_sm,
  },
  usage: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
  },
});

export default Usage;
