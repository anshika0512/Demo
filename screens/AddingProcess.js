import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const AddingProcess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addingProcess}>
      <Image
        style={[
          styles.addingProcessChild,
          styles.addingPosition,
          styles.addingLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[
          styles.addingProcessItem,
          styles.addingPosition,
          styles.addingLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.addingProcessInner, styles.addingPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-102.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.addingProcessChild1, styles.addingChildPosition1]} />
      <View
        style={[
          styles.addingProcessChild2,
          styles.addingChildPosition1,
          styles.rectangleViewLayout,
        ]}
      />
      <View style={styles.addingProcessChild3} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("DashboardAddedAppsLatest")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("DashboardAddedAppsLatest")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <Text
        style={[styles.blockSetting, styles.blockSettingLayout, styles.amTypo]}
      >
        Block Setting
      </Text>
      <View style={[styles.notifications, styles.blockSettingLayout]}>
        <Image
          style={[styles.signalIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/signal1.png")}
        />
        <Image
          style={[styles.batteryThreeQuartersIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters1.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.amPosition]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.am, styles.amPosition, styles.amTypo]}>
          8:00 pm
        </Text>
      </View>
      <Text style={styles.facebook}> Facebook</Text>
      <Image
        style={styles.facebook2Icon}
        resizeMode="cover"
        source={require("../assets/facebook-2.png")}
      />
      <Text
        style={[
          styles.iWantTo,
          styles.limitLayout,
          styles.limitTypo,
          styles.repeatPosition,
        ]}
      >
        I want to Block
      </Text>
      <Text
        style={[
          styles.usageLimit,
          styles.limitLayout,
          styles.limitTypo,
          styles.repeatPosition,
        ]}
      >
        Usage Limit
      </Text>
      <Text
        style={[styles.launchesLimit, styles.limitLayout, styles.limitTypo]}
      >
        Launches Limit
      </Text>
      <Text
        style={[
          styles.repeat,
          styles.limitLayout,
          styles.limitTypo,
          styles.repeatPosition,
        ]}
      >
        Repeat
      </Text>
      <Text style={[styles.specificTimeInterval, styles.limitLayout]}>
        Specific Time Interval
      </Text>
      <Image
        style={[styles.iconsaxlineareyeslash, styles.limitLayout]}
        resizeMode="cover"
        source={require("../assets/iconsaxlineareyeslash.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Text style={[styles.appLaunch, styles.appLaunchTypo]}>App Launch</Text>
      <Text style={[styles.notification, styles.appLaunchTypo]}>
        Notification
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.addingProcessChild4, styles.addingChildBorder]} />
      <View style={[styles.addingProcessChild5, styles.addingChildBorder]} />
      <View style={[styles.addingProcessChild6, styles.addingChildPosition]} />
      <View style={[styles.addingProcessChild7, styles.addingChildPosition]} />
      <View style={[styles.addingProcessChild8, styles.addingChildBorder]} />
      <View style={[styles.addingProcessChild9, styles.addingChildLayout]} />
      <View style={[styles.addingProcessChild10, styles.addingChildLayout]} />
      <Text style={[styles.hr05Min, styles.minTypo, styles.minTypo1]}>
        11 hr 05 min
      </Text>
      <Text style={[styles.hr10Min, styles.minTypo]}>0 hr 10 min</Text>
      <Text style={[styles.hr15Min, styles.minTypo, styles.minTypo1]}>
        1 hr 15 min
      </Text>
      <Image
        style={styles.whatsappImage20221017At1}
        resizeMode="cover"
        source={require("../assets/whatsapp-image-20221017-at-1033-1.png")}
      />
      <View style={[styles.addingProcessChild11, styles.lineViewLayout]} />
      <Image
        style={[styles.iconCheckBox, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-check-box.png")}
      />
      <Image
        style={[styles.iconCheckBoxOutlineBlank, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-check-box-outline-blank.png")}
      />
      <Image
        style={[styles.iconCheckBoxOutlineBlank1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-check-box-outline-blank.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-63.png")}
      />
      <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      <Pressable
        style={[styles.addingProcessChild12, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("AddApp")}
      />
      <Text style={[styles.cancel, styles.saveTypo]}>Cancel</Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addingPosition: {
    display: "none",
    position: "absolute",
  },
  addingLayout: {
    height: 434,
    width: 574,
    display: "none",
  },
  rectangleViewLayout: {
    width: 391,
    left: 0,
  },
  addingChildPosition1: {
    top: 125,
    position: "absolute",
  },
  rectanglePressableLayout: {
    height: 44,
    borderRadius: Border.br_2xs,
    top: 786,
    position: "absolute",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  blockSettingLayout: {
    height: 30,
    position: "absolute",
  },
  amTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconLayout1: {
    bottom: "0%",
    top: "0%",
    width: "7.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  amPosition: {
    top: "16%",
    position: "absolute",
  },
  limitLayout: {
    height: 24,
    position: "absolute",
  },
  limitTypo: {
    width: 152,
    height: 24,
    color: Color.deepskyblue,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  repeatPosition: {
    left: 11,
    width: 152,
  },
  appLaunchTypo: {
    height: 16,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.black,
    textAlign: "left",
    left: 50,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  addingChildBorder: {
    borderColor: "rgba(0, 0, 0, 0.4)",
    left: 1,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    width: 390,
    position: "absolute",
  },
  addingChildPosition: {
    left: 2,
    borderColor: "rgba(0, 0, 0, 0.4)",
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    width: 390,
    position: "absolute",
  },
  addingChildLayout: {
    width: 143,
    left: 110,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
  },
  minTypo: {
    height: 19,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_4xs,
    left: 121,
    width: 143,
    textAlign: "left",
    position: "absolute",
  },
  minTypo1: {
    color: Color.gray_300,
    height: 19,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_4xs,
    left: 121,
  },
  iconLayout: {
    left: "86.92%",
    right: "6.15%",
    width: "6.92%",
    height: "3.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  saveTypo: {
    height: 37,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    top: 789,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    left: "86.41%",
    right: "5.44%",
    width: "8.15%",
    height: "1.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  addingProcessChild: {
    top: 589,
    left: -51,
  },
  addingProcessItem: {
    top: -90,
    left: 114,
  },
  addingProcessInner: {
    top: 430,
    left: 141,
    width: 338,
    height: 425,
    opacity: 0.6,
  },
  rectangleView: {
    top: 0,
    borderBottomLeftRadius: Border.br_2xl,
    height: 125,
    backgroundColor: Color.steelblue_200,
    position: "absolute",
  },
  addingProcessChild1: {
    left: 89,
    borderBottomLeftRadius: Border.br_xl,
    width: 302,
    height: 158,
    backgroundColor: Color.steelblue_200,
  },
  addingProcessChild2: {
    borderTopRightRadius: Border.br_3xl,
    height: 719,
    backgroundColor: Color.white,
    top: 125,
    width: 391,
  },
  addingProcessChild3: {
    borderTopRightRadius: 80,
    backgroundColor: Color.silver,
    height: 82,
    opacity: 0.2,
    width: 390,
    top: 125,
    left: 0,
    position: "absolute",
  },
  rectanglePressable: {
    left: 228,
    backgroundColor: Color.cornflowerblue,
    width: 130,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  vector: {
    left: "2.82%",
    top: "6.28%",
    right: "90.51%",
    bottom: "90.64%",
    width: "6.67%",
    height: "3.08%",
    position: "absolute",
  },
  blockSetting: {
    top: 50,
    fontSize: FontSize.size_4xl,
    color: Color.snow_100,
    width: 203,
    left: 50,
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
    width: "7.51%",
    top: "16%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  am: {
    left: "3.3%",
    fontSize: FontSize.size_5xs,
    color: Color.white,
  },
  notifications: {
    top: 7,
    left: -3,
    width: 386,
  },
  facebook: {
    top: 153,
    left: 70,
    width: 127,
    height: 29,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  facebook2Icon: {
    top: 135,
    borderRadius: Border.br_4xs,
    width: 55,
    height: 62,
    left: 12,
    position: "absolute",
  },
  iWantTo: {
    top: 215,
  },
  usageLimit: {
    top: 331,
  },
  launchesLimit: {
    top: 708,
    left: 12,
  },
  repeat: {
    top: 498,
  },
  specificTimeInterval: {
    top: 661,
    width: 223,
    color: Color.deepskyblue,
    height: 24,
    left: 11,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconsaxlineareyeslash: {
    width: 24,
    top: 247,
    left: 12,
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "2.01%",
    width: "5.13%",
    top: "33.89%",
    right: "91.28%",
    bottom: "64.1%",
    left: "3.59%",
    position: "absolute",
  },
  appLaunch: {
    width: 106,
    top: 247,
  },
  notification: {
    top: 282,
    width: 120,
  },
  lineView: {
    top: 207,
    borderColor: "#000",
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    width: 390,
    left: 0,
  },
  addingProcessChild4: {
    top: 321,
  },
  addingProcessChild5: {
    top: 647,
  },
  addingProcessChild6: {
    top: 698,
  },
  addingProcessChild7: {
    top: 743,
  },
  addingProcessChild8: {
    top: 483,
  },
  addingProcessChild9: {
    top: 407,
  },
  addingProcessChild10: {
    top: 438,
  },
  hr05Min: {
    top: 378,
  },
  hr10Min: {
    top: 412,
    height: 19,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_4xs,
    left: 121,
    color: Color.black,
  },
  hr15Min: {
    top: 447,
  },
  whatsappImage20221017At1: {
    top: 530,
    width: 400,
    height: 94,
    left: 0,
    position: "absolute",
  },
  addingProcessChild11: {
    top: 557,
    left: 18,
    borderColor: "rgba(0, 0, 0, 0.3)",
    width: 234,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  iconCheckBox: {
    top: "58.77%",
    bottom: "38.03%",
  },
  iconCheckBoxOutlineBlank: {
    top: "78.32%",
    bottom: "18.48%",
  },
  iconCheckBoxOutlineBlank1: {
    top: "83.89%",
    bottom: "12.91%",
  },
  rectangleIcon: {
    top: 777,
    left: 29,
    width: 150,
    height: 47,
    position: "absolute",
  },
  save: {
    left: 259,
    width: 103,
  },
  addingProcessChild12: {
    left: 23,
    backgroundColor: "#f99a42",
    width: 156,
  },
  cancel: {
    width: 124,
    left: 50,
  },
  vectorIcon2: {
    top: "33.77%",
    bottom: "64.41%",
  },
  vectorIcon3: {
    top: "29.86%",
    bottom: "68.32%",
  },
  addingProcess: {
    borderRadius: Border.br_lg,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AddingProcess;
