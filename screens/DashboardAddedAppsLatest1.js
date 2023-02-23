import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuBar1 from "../components/MenuBar1";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const DashboardAddedAppsLatest1 = () => {
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
          style={[styles.dashboardAddedAppsLatestChild, styles.dashboardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={[styles.dashboardAddedAppsLatestItem, styles.dashboardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={styles.dashboardAddedAppsLatestInner}
          resizeMode="cover"
          source={require("../assets/ellipse-101.png")}
        />
        <View style={[styles.notifications, styles.notificationsLayout]}>
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
        <View style={[styles.notifications1, styles.notificationsLayout]}>
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
            source={require("../assets/vector61.png")}
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
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector6.png")}
          />
        </Pressable>
        <Text style={[styles.totalRemainingTime, styles.recommendedAppsTypo]}>
          Total Remaining Time: 45 mins
        </Text>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-37.png")}
        />
        <Text style={[styles.whatsapp, styles.whatsappTypo]}>Whatsapp</Text>
        <Text style={[styles.minsLeft, styles.minsTypo]}>( 30 Mins left )</Text>
        <Image
          style={styles.whatsappIconLogoBdc0a8063b}
          resizeMode="cover"
          source={require("../assets/whatsappiconlogobdc0a8063bseeklogo-1.png")}
        />
        <Image
          style={[styles.pexelsLumn1676991Icon, styles.pexelsIconLayout]}
          resizeMode="cover"
          source={require("../assets/pexelslumn167699-1.png")}
        />
        <Text style={[styles.instagram, styles.whatsappTypo]}>Instagram</Text>
        <Text style={[styles.minsLeft1, styles.minsTypo]}>
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
            styles.dashboardChildLayout,
          ]}
        />
        <View
          style={[
            styles.dashboardAddedAppsLatestChild6,
            styles.dashboardChildLayout,
          ]}
        />
        <Text style={[styles.whatsapp, styles.whatsappTypo]}>Whatsapp</Text>
        <Text style={[styles.minsLeft, styles.minsTypo]}>( 30 Mins left )</Text>
        <Image
          style={styles.whatsappIconLogoBdc0a8063b}
          resizeMode="cover"
          source={require("../assets/whatsappiconlogobdc0a8063bseeklogo-1.png")}
        />
        <Text style={[styles.instagram, styles.whatsappTypo]}>Instagram</Text>
        <Text style={[styles.minsLeft1, styles.minsTypo]}>
          ( 15 Mins left )
        </Text>
        <Image
          style={styles.whatsappIconLogoBdc0a8063b1}
          resizeMode="cover"
          source={require("../assets/whatsappiconlogobdc0a8063bseeklogo-2.png")}
        />
        <View style={styles.dashboardAddedAppsLatestChild7} />
        <Text style={[styles.recommendedApps, styles.recommendedAppsTypo]}>
          Recommended Apps
        </Text>
        <Pressable
          style={styles.pngTransparentComputerIcons}
          onPress={() => navigation.navigate("AddApp")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/pngtransparentcomputericonsaddlogodesktopwallpaperaddthumbnailremovebgpreview-1.png")}
          />
        </Pressable>
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
  dashboardLayout: {
    height: 434,
    width: 574,
    display: "none",
    position: "absolute",
  },
  notificationsLayout: {
    height: 30,
    position: "absolute",
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
    position: "absolute",
  },
  whatsappTypo: {
    height: 40,
    width: 237,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  minsTypo: {
    height: 24,
    width: 243,
    color: Color.crimson_100,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  pexelsIconLayout: {
    height: 36,
    width: 37,
    left: 328,
    position: "absolute",
  },
  dashboardChildLayout: {
    backgroundColor: Color.gray_400,
    height: 62,
    width: 390,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
  },
  dashboardAddedAppsLatestChild: {
    top: 589,
    left: -51,
    display: "none",
  },
  dashboardAddedAppsLatestItem: {
    top: -90,
    left: 114,
    display: "none",
  },
  dashboardAddedAppsLatestInner: {
    top: 430,
    left: 141,
    width: 338,
    height: 425,
    opacity: 0.6,
    display: "none",
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
    display: "none",
  },
  rectangleView: {
    top: -1,
    borderBottomLeftRadius: Border.br_3xl,
    height: 198,
    backgroundColor: Color.steelblue_200,
  },
  dashboardAddedAppsLatestChild1: {
    top: 196,
    left: 89,
    borderBottomLeftRadius: Border.br_xl,
    width: 301,
    height: 158,
    backgroundColor: Color.steelblue_200,
    position: "absolute",
  },
  dashboardAddedAppsLatestChild2: {
    top: 198,
    borderTopRightRadius: Border.br_4xl,
    height: 646,
    backgroundColor: Color.white,
    width: 391,
    left: 0,
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
    left: 11,
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
  icon: {
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
    left: 11,
  },
  rectangleIcon: {
    top: 789,
    left: 484,
    height: 62,
    width: 390,
    position: "absolute",
  },
  whatsapp: {
    top: 293,
    left: 73,
  },
  minsLeft: {
    top: 321,
    left: 103,
  },
  whatsappIconLogoBdc0a8063b: {
    top: 298,
    left: 8,
    width: 50,
    height: 44,
    position: "absolute",
  },
  pexelsLumn1676991Icon: {
    top: 302,
  },
  instagram: {
    top: 369,
    left: 75,
  },
  minsLeft1: {
    top: 397,
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
  recommendedApps: {
    top: 743,
    left: 83,
    fontSize: FontSize.size_xs,
    width: 192,
    height: 32,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  pngTransparentComputerIcons: {
    left: 304,
    top: 718,
    width: 70,
    height: 71,
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

export default DashboardAddedAppsLatest1;
