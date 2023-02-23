import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuBar1 from "../components/MenuBar1";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const DashboardAddedAppsLatest = () => {
  const [vectorIcon2Visible, setVectorIcon2Visible] = useState(false);
  const navigation = useNavigation();

  const openVectorIcon2 = useCallback(() => {
    setVectorIcon2Visible(true);
  }, []);

  const closeVectorIcon2 = useCallback(() => {
    setVectorIcon2Visible(false);
  }, []);
  return (
    <>
      <View style={styles.dashboardAddedAppsLatest}>
        <Image
          style={[
            styles.dashboardAddedAppsLatestChild,
            styles.dashboardPosition,
            styles.dashboardLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={[
            styles.dashboardAddedAppsLatestItem,
            styles.dashboardPosition,
            styles.dashboardLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[
            styles.dashboardAddedAppsLatestInner,
            styles.dashboardPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-102.png")}
        />
        <View style={[styles.notifications, styles.dashboardPosition]}>
          <Image
            style={[styles.signalIcon, styles.iconLayout, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/signal2.png")}
          />
          <Image
            style={[
              styles.batteryThreeQuartersIcon,
              styles.iconLayout,
              styles.iconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/batterythreequarters2.png")}
          />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={[styles.am, styles.amTypo]}>8:00 pm</Text>
        </View>
        <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
        <View style={styles.dashboardAddedAppsLatestChild1} />
        <View
          style={[
            styles.dashboardAddedAppsLatestChild2,
            styles.rectangleViewPosition,
          ]}
        />
        <Pressable
          style={[
            styles.rectanglePressable,
            styles.rectangleChildLayout,
            styles.dashboardChildLayout,
          ]}
          onPress={() => navigation.navigate("AddingProcess")}
        />
        <Text
          style={[styles.facebook, styles.facebookTypo, styles.facebookLayout]}
        >
          Facebook
        </Text>
        <Text style={[styles.minsLeft, styles.minsTypo1]}>
          ( 10 Mins left )
        </Text>
        <Image
          style={[styles.pexelsLumn1676993Icon, styles.pexelsIconLayout]}
          resizeMode="cover"
          source={require("../assets/pexelslumn167699-3.png")}
        />
        <Pressable
          style={[styles.facebook3, styles.facebook3Position]}
          onPress={() => navigation.navigate("AddingProcess")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/facebook-3.png")}
          />
        </Pressable>
        <View style={[styles.notifications1, styles.notifications1Position]}>
          <Image
            style={[styles.signalIcon, styles.iconLayout, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/signal3.png")}
          />
          <Image
            style={[
              styles.batteryThreeQuartersIcon,
              styles.iconLayout,
              styles.iconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/batterythreequarters3.png")}
          />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector5.png")}
          />
          <Text style={[styles.am1, styles.am1Typo]}>8:00 pm</Text>
        </View>
        <Pressable
          style={styles.pro}
          onPress={() => navigation.navigate("ProVersion")}
        >
          <Text style={[styles.pro1, styles.am1Typo]}>Pro</Text>
        </Pressable>
        <Text style={[styles.digidost, styles.amTypo]}>DigiDost</Text>
        <View style={styles.dashboardAddedAppsLatestChild3} />
        <Pressable
          style={[styles.analytics, styles.todoPosition]}
          onPress={() => navigation.navigate("DashboardAnalytics")}
        >
          <Text style={[styles.analytics1, styles.todo1Typo]}>Analytics</Text>
        </Pressable>
        <Pressable
          style={[styles.todo, styles.todoPosition]}
          onPress={() => navigation.navigate("DashboardTodo")}
        >
          <Text style={[styles.todo1, styles.todo1Typo]}>ToDo</Text>
        </Pressable>
        <View style={styles.dashboardAddedAppsLatestChild4} />
        <Text
          style={[styles.addedApps, styles.todo1Typo]}
        >{`Added Apps `}</Text>
        <Pressable style={styles.vector} onPress={openVectorIcon2}>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector6.png")}
          />
        </Pressable>
        <Text
          style={[
            styles.totalRemainingTime,
            styles.notifications1Position,
            styles.recommendedAppsTypo,
          ]}
        >
          Total Remaining Time: 45 mins
        </Text>
        <Image
          style={[styles.rectangleIcon, styles.rectangleChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-37.png")}
        />
        <Text
          style={[styles.whatsapp, styles.facebookTypo, styles.facebookLayout]}
        >
          Whatsapp
        </Text>
        <Text style={[styles.minsLeft1, styles.minsTypo1]}>
          ( 30 Mins left )
        </Text>
        <Image
          style={[styles.whatsappIconLogoBdc0a8063b, styles.facebook3Position]}
          resizeMode="cover"
          source={require("../assets/whatsappiconlogobdc0a8063bseeklogo-1.png")}
        />
        <Image
          style={[styles.pexelsLumn1676991Icon, styles.pexelsIconLayout]}
          resizeMode="cover"
          source={require("../assets/pexelslumn167699-1.png")}
        />
        <Text style={[styles.instagram, styles.facebookTypo]}>Instagram</Text>
        <Text style={[styles.minsLeft2, styles.minsTypo]}>
          ( 15 Mins left )
        </Text>
        <Image
          style={styles.whatsappIconLogoBdc0a8063b1}
          resizeMode="cover"
          source={require("../assets/whatsappiconlogobdc0a8063bseeklogo-2.png")}
        />
        <Image
          style={[styles.pexelsLumn1676992Icon, styles.pexelsIconLayout]}
          resizeMode="cover"
          source={require("../assets/pexelslumn167699-1.png")}
        />
        <View
          style={[
            styles.dashboardAddedAppsLatestChild5,
            styles.rectangleChildLayout,
            styles.dashboardChildLayout,
            styles.dashboardChildPosition,
          ]}
        />
        <View
          style={[
            styles.dashboardAddedAppsLatestChild6,
            styles.rectangleChildLayout,
            styles.dashboardChildLayout,
            styles.dashboardChildPosition,
          ]}
        />
        <Text
          style={[styles.whatsapp, styles.facebookTypo, styles.facebookLayout]}
        >
          Whatsapp
        </Text>
        <Text style={[styles.minsLeft1, styles.minsTypo1]}>
          ( 30 Mins left )
        </Text>
        <Image
          style={[styles.whatsappIconLogoBdc0a8063b, styles.facebook3Position]}
          resizeMode="cover"
          source={require("../assets/whatsappiconlogobdc0a8063bseeklogo-1.png")}
        />
        <Text style={[styles.instagram, styles.facebookTypo]}>Instagram</Text>
        <Text style={[styles.minsLeft4, styles.minsTypo]}>
          ( 15 Mins left )
        </Text>
        <Image
          style={styles.whatsappIconLogoBdc0a8063b1}
          resizeMode="cover"
          source={require("../assets/whatsappiconlogobdc0a8063bseeklogo-2.png")}
        />
        <View style={styles.dashboardAddedAppsLatestChild7} />
        <Pressable
          style={styles.pngTransparentComputerIcons}
          onPress={() => navigation.navigate("AddAppLatest")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/pngtransparentcomputericonsaddlogodesktopwallpaperaddthumbnailremovebgpreview-1.png")}
          />
        </Pressable>
        <Text style={[styles.recommendedApps, styles.recommendedAppsTypo]}>
          Recommended Apps
        </Text>
      </View>

      <Modal animationType="fade" transparent visible={vectorIcon2Visible}>
        <View style={styles.vectorIcon2Overlay}>
          <Pressable style={styles.vectorIcon2Bg} onPress={closeVectorIcon2} />
          <MenuBar1 onClose={closeVectorIcon2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  dashboardPosition: {
    display: "none",
    position: "absolute",
  },
  dashboardLayout: {
    height: 434,
    width: 574,
    display: "none",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "0%",
    top: "0%",
    width: "7.51%",
    maxWidth: "100%",
    position: "absolute",
  },
  amTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleViewPosition: {
    width: 391,
    left: 0,
    position: "absolute",
  },
  rectangleChildLayout: {
    height: 62,
    width: 390,
    position: "absolute",
  },
  dashboardChildLayout: {
    backgroundColor: Color.gray_400,
    width: 390,
    borderRadius: Border.br_xs,
  },
  facebookTypo: {
    height: 40,
    width: 237,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  facebookLayout: {
    left: 73,
    height: 40,
    width: 237,
    fontSize: FontSize.size_xl,
  },
  minsTypo1: {
    height: 24,
    width: 243,
    color: Color.crimson_100,
    left: 103,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  pexelsIconLayout: {
    height: 36,
    width: 37,
    left: 328,
    position: "absolute",
  },
  facebook3Position: {
    left: 8,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  notifications1Position: {
    left: 11,
    position: "absolute",
  },
  am1Typo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  todoPosition: {
    top: 128,
    position: "absolute",
  },
  todo1Typo: {
    height: 22,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  recommendedAppsTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.black,
  },
  minsTypo: {
    top: 397,
    height: 24,
    width: 243,
    color: Color.crimson_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  dashboardChildPosition: {
    left: 0,
    backgroundColor: Color.gray_400,
  },
  dashboardAddedAppsLatestChild: {
    top: 589,
    left: -51,
  },
  dashboardAddedAppsLatestItem: {
    top: -90,
    left: 114,
  },
  dashboardAddedAppsLatestInner: {
    top: 430,
    left: 141,
    width: 338,
    height: 425,
    opacity: 0.6,
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
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
    left: "3.3%",
    top: "16%",
  },
  notifications: {
    top: 7,
    left: 17,
    width: 386,
    height: 30,
  },
  rectangleView: {
    top: -1,
    borderBottomLeftRadius: Border.br_3xl,
    height: 198,
    backgroundColor: Color.steelblue_200,
  },
  dashboardAddedAppsLatestChild1: {
    top: 192,
    left: 89,
    borderBottomLeftRadius: Border.br_xl,
    width: 301,
    height: 158,
    backgroundColor: Color.steelblue_200,
    position: "absolute",
  },
  dashboardAddedAppsLatestChild2: {
    top: 197,
    borderTopRightRadius: Border.br_4xl,
    height: 646,
    backgroundColor: Color.white,
    width: 391,
  },
  rectanglePressable: {
    top: 433,
    left: -3,
  },
  facebook: {
    top: 439,
  },
  minsLeft: {
    top: 467,
  },
  pexelsLumn1676993Icon: {
    top: 448,
  },
  icon: {
    borderRadius: Border.br_6xs,
  },
  facebook3: {
    top: 441,
    width: 51,
    height: 51,
  },
  am1: {
    fontSize: FontSize.size_5xs,
    left: "3.3%",
    color: Color.white,
    top: "16%",
    position: "absolute",
  },
  notifications1: {
    top: 4,
    width: 366,
    height: 30,
  },
  pro1: {
    fontSize: FontSize.size_3xs,
  },
  pro: {
    left: 348,
    top: 57,
    position: "absolute",
  },
  digidost: {
    top: 50,
    left: 137,
    fontSize: FontSize.size_3xl,
    color: Color.snow_100,
    width: 114,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  dashboardAddedAppsLatestChild3: {
    top: 105,
    left: 27,
    backgroundColor: Color.darkslategray,
    width: 329,
    height: 65,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  analytics1: {
    width: 105,
    fontSize: FontSize.size_3xs,
  },
  analytics: {
    left: 185,
  },
  todo1: {
    width: 45,
    fontSize: FontSize.size_3xs,
  },
  todo: {
    left: 290,
  },
  dashboardAddedAppsLatestChild4: {
    top: 117,
    left: 43,
    borderRadius: Border.br_5xs,
    width: 134,
    height: 41,
    backgroundColor: Color.steelblue_200,
    position: "absolute",
  },
  addedApps: {
    top: 125,
    left: 51,
    fontSize: FontSize.size_sm,
    width: 122,
    position: "absolute",
  },
  vectorIcon2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vectorIcon2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon1: {
    maxWidth: "100%",
    width: "100%",
  },
  vector: {
    left: "5.38%",
    top: "6.4%",
    right: "89.01%",
    bottom: "91.01%",
    width: "5.61%",
    height: "2.59%",
    position: "absolute",
  },
  totalRemainingTime: {
    top: 226,
    fontSize: FontSize.size_lg,
    width: 373,
    height: 42,
  },
  rectangleIcon: {
    top: 789,
    left: 484,
  },
  whatsapp: {
    top: 293,
  },
  minsLeft1: {
    top: 321,
  },
  whatsappIconLogoBdc0a8063b: {
    top: 298,
    width: 50,
    height: 44,
  },
  pexelsLumn1676991Icon: {
    top: 302,
  },
  instagram: {
    top: 369,
    left: 75,
  },
  minsLeft2: {
    left: 105,
  },
  whatsappIconLogoBdc0a8063b1: {
    top: 366,
    left: 3,
    width: 60,
    height: 53,
    position: "absolute",
  },
  pexelsLumn1676992Icon: {
    top: 378,
  },
  dashboardAddedAppsLatestChild5: {
    top: 290,
  },
  dashboardAddedAppsLatestChild6: {
    top: 363,
  },
  minsLeft4: {
    left: 104,
  },
  dashboardAddedAppsLatestChild7: {
    top: 737,
    left: 52,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightslategray,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 235,
    height: 35,
    position: "absolute",
  },
  pngTransparentComputerIcons: {
    left: 304,
    top: 718,
    width: 70,
    height: 71,
    position: "absolute",
  },
  recommendedApps: {
    top: 742,
    left: 77,
    fontSize: FontSize.size_xs,
    width: 192,
    height: 32,
    position: "absolute",
  },
  dashboardAddedAppsLatest: {
    borderRadius: Border.br_sm,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default DashboardAddedAppsLatest;
