import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Margin } from "../GlobalStyles";

const TaskSetting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.taskSetting}>
      <Image
        style={styles.mobileAppDevelopmentTrendsIcon}
        resizeMode="cover"
        source={require("../assets/mobileappdevelopmenttrends-1.png")}
      />
      <Pressable
        style={[
          styles.editEditorPenPencilWriteI,
          styles.iconsaxlinearrepeatLayout,
        ]}
        onPress={() => navigation.navigate("EDIT")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/editeditorpenpencilwriteicon4-3.png")}
        />
      </Pressable>
      <Image
        style={styles.shutterstock6155919771Icon}
        resizeMode="cover"
        source={require("../assets/shutterstock-615591977-1.png")}
      />
      <Image
        style={[styles.taskSettingChild, styles.taskLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.taskSettingItem, styles.taskLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.taskSettingInner}
        resizeMode="cover"
        source={require("../assets/ellipse-104.png")}
      />
      <Image
        style={styles.pexelsLumn1676991Icon}
        resizeMode="cover"
        source={require("../assets/pexelslumn167699-11.png")}
      />
      <View style={styles.component16}>
        <View style={[styles.component16Child, styles.component16Position1]} />
        <View style={[styles.component16Item, styles.component16Position]} />
        <View
          style={[
            styles.component16Inner,
            styles.component16Position,
            styles.component16Position1,
          ]}
        />
      </View>
      <Image
        style={[styles.component5Icon, styles.notificationsPosition]}
        resizeMode="cover"
        source={require("../assets/component-5.png")}
      />
      <Text style={[styles.study, styles.textTypo]}>Study</Text>
      <View style={[styles.notifications, styles.notificationsPosition]}>
        <Image
          style={[
            styles.signalIcon,
            styles.iconLayout,
            styles.iconLayout1,
            styles.iconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/signal8.png")}
        />
        <Image
          style={[
            styles.batteryThreeQuartersIcon,
            styles.iconLayout,
            styles.iconLayout1,
            styles.iconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters8.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector31.png")}
        />
        <Text style={[styles.am, styles.amTypo]}>8:00 pm</Text>
      </View>
      <Text style={[styles.text, styles.textTypo]}>{`+ `}</Text>
      <Text style={styles.addStep}>Add Step</Text>
      <View
        style={[styles.lineView, styles.linePosition, styles.lineViewLayout]}
      />
      <View
        style={[
          styles.taskSettingChild1,
          styles.linePosition,
          styles.lineViewLayout,
        ]}
      />
      <Image
        style={[
          styles.vectorIcon1,
          styles.vectorIconPosition,
          styles.vectorIconLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/vector32.png")}
      />
      <Text style={[styles.remindMeAtContainer, styles.addANoteTypo]}>
        <Text style={styles.remindMeAt}>Remind me at 16:00</Text>
        <Text style={styles.fri16Sep}>Fri, 16 Sep</Text>
      </Text>
      <Text style={[styles.repeat, styles.repeatTypo]}>Repeat</Text>
      <Text style={[styles.dueFri16, styles.dueFri16Typo]}>
        Due Fri, 16 Sep
      </Text>
      <Text style={[styles.addedToMy, styles.dueFri16Typo]}>
        Added to my Day
      </Text>
      <Image
        style={[styles.lineIcon, styles.linePosition]}
        resizeMode="cover"
        source={require("../assets/line-16.png")}
      />
      <View style={[styles.taskSettingChild2, styles.taskChildBorder]} />
      <View style={[styles.taskSettingChild3, styles.taskChildBorder]} />
      <Image
        style={styles.vectorIcon2}
        resizeMode="cover"
        source={require("../assets/vector33.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorIconPosition]}
        onPress={() => navigation.navigate("DashboardTodo")}
      >
        <Image
          style={[styles.iconLayout, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector34.png")}
        />
      </Pressable>
      <Text style={[styles.myDay, styles.amTypo]}>My Day</Text>
      <Image
        style={[
          styles.vectorIcon3,
          styles.vectorIconPosition,
          styles.vectorIconLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/vector35.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector36.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector36.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector36.png")}
      />
      <Image
        style={[styles.iconsaxlinearrepeat, styles.iconsaxlinearrepeatLayout]}
        resizeMode="cover"
        source={require("../assets/iconsaxlinearrepeat.png")}
      />
      <View style={[styles.taskSettingChild4, styles.taskChildBorder]} />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Text style={[styles.addANote, styles.addANoteTypo]}>Add a note</Text>
      <Image
        style={[styles.vectorIcon7, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector39.png")}
      />
      <Text style={[styles.createdOnThru, styles.repeatTypo]}>
        Created on Thru, 15 Sep
      </Text>
      <Image
        style={styles.iconsaxlinearstar1}
        resizeMode="cover"
        source={require("../assets/iconsaxlinearstar1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconsaxlinearrepeatLayout: {
    width: 27,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  taskLayout: {
    height: 434,
    width: 574,
    display: "none",
    position: "absolute",
  },
  component16Position1: {
    left: "0%",
    width: "100%",
  },
  component16Position: {
    top: "14.81%",
    right: "0%",
    position: "absolute",
  },
  notificationsPosition: {
    left: 10,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout1: {
    width: "7.51%",
    maxWidth: "100%",
    position: "absolute",
  },
  iconPosition: {
    top: "0%",
    width: "7.51%",
    bottom: "0%",
    height: "100%",
  },
  amTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  linePosition: {
    height: 1,
    left: 0,
    position: "absolute",
  },
  lineViewLayout: {
    borderTopWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    height: 1,
    width: 391,
  },
  vectorIconPosition: {
    left: "4.11%",
    position: "absolute",
  },
  vectorIconLayout1: {
    right: "88.97%",
    width: "6.92%",
    left: "4.11%",
    height: "3.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  addANoteTypo: {
    height: 50,
    fontSize: FontSize.size_xs,
    width: 282,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  repeatTypo: {
    height: 23,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  dueFri16Typo: {
    height: 32,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  taskChildBorder: {
    borderColor: "rgba(0, 0, 0, 0.5)",
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    width: 391,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    left: "90%",
    right: "5.59%",
    width: "4.41%",
    height: "2.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mobileAppDevelopmentTrendsIcon: {
    top: 135,
    left: -314,
    width: 770,
    height: 709,
    display: "none",
    position: "absolute",
  },
  icon: {
    display: "none",
  },
  editEditorPenPencilWriteI: {
    left: 327,
    top: 263,
    height: 30,
  },
  shutterstock6155919771Icon: {
    top: 134,
    left: -162,
    width: 827,
    height: 710,
    display: "none",
    position: "absolute",
  },
  taskSettingChild: {
    top: 589,
    left: -51,
  },
  taskSettingItem: {
    top: -90,
    left: 114,
  },
  taskSettingInner: {
    top: 430,
    left: 141,
    width: 338,
    height: 425,
    opacity: 0.6,
    display: "none",
    position: "absolute",
  },
  pexelsLumn1676991Icon: {
    top: -200,
    left: -368,
    width: 1564,
    height: 1283,
    display: "none",
    position: "absolute",
  },
  component16Child: {
    height: "14.81%",
    bottom: "85.19%",
    borderBottomLeftRadius: Border.br_2xl,
    backgroundColor: Color.steelblue_200,
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  component16Item: {
    height: "18.72%",
    width: "77.24%",
    bottom: "66.47%",
    left: "22.76%",
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.steelblue_200,
  },
  component16Inner: {
    height: "85.19%",
    borderTopRightRadius: Border.br_3xl,
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.white,
    top: "14.81%",
  },
  component16: {
    top: 0,
    width: 391,
    left: 0,
    position: "absolute",
    height: 844,
  },
  component5Icon: {
    top: 142,
    width: 36,
    height: 33,
  },
  study: {
    top: 139,
    left: 63,
    width: 102,
  },
  signalIcon: {
    right: "11.41%",
    left: "81.08%",
    bottom: "0%",
  },
  batteryThreeQuartersIcon: {
    right: "0.9%",
    left: "91.59%",
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
    width: 365,
    height: 30,
  },
  text: {
    top: 185,
    left: 20,
    width: 28,
    height: 31,
  },
  addStep: {
    top: 193,
    left: 60,
    width: 95,
    height: 28,
    color: Color.lightseagreen,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  lineView: {
    top: 232,
  },
  taskSettingChild1: {
    top: 791,
  },
  vectorIcon1: {
    top: "38.03%",
    bottom: "58.77%",
  },
  remindMeAt: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  fri16Sep: {
    margin: Margin.m_md,
  },
  remindMeAtContainer: {
    top: 315,
    left: 66,
  },
  repeat: {
    top: 445,
    width: 75,
    left: 66,
    fontSize: FontSize.size_base,
    height: 23,
  },
  dueFri16: {
    top: 385,
    color: Color.red,
    width: 152,
    left: 66,
  },
  addedToMy: {
    top: 266,
    left: 69,
    width: 282,
    height: 32,
    color: Color.lightseagreen,
  },
  lineIcon: {
    top: 366,
    width: 390,
  },
  taskSettingChild2: {
    top: 306,
  },
  taskSettingChild3: {
    top: 426,
  },
  vectorIcon2: {
    width: "6.41%",
    top: "45.38%",
    right: "89.23%",
    bottom: "51.42%",
    left: "4.36%",
    height: "3.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vector: {
    top: "6.64%",
    right: "90%",
    bottom: "90.64%",
    width: "5.9%",
    height: "2.73%",
  },
  myDay: {
    top: 52,
    left: 54,
    fontSize: 25,
    width: 119,
    height: 30,
  },
  vectorIcon3: {
    top: "31.52%",
    bottom: "65.28%",
  },
  vectorIcon4: {
    top: "45.85%",
    bottom: "52.11%",
  },
  vectorIcon5: {
    top: "32.11%",
    bottom: "65.85%",
  },
  vectorIcon6: {
    top: "39.22%",
    bottom: "58.75%",
  },
  iconsaxlinearrepeat: {
    top: 443,
    left: 16,
    height: 27,
    overflow: "hidden",
  },
  taskSettingChild4: {
    top: 486,
  },
  rectangleIcon: {
    top: 501,
    left: 6,
    borderRadius: 14,
    width: 377,
    height: 122,
    position: "absolute",
  },
  addANote: {
    top: 508,
    left: 21,
  },
  vectorIcon7: {
    height: "2.96%",
    width: "5.61%",
    top: "94.67%",
    right: "5.93%",
    bottom: "2.37%",
    left: "88.46%",
    position: "absolute",
  },
  createdOnThru: {
    top: 800,
    left: 11,
    fontSize: FontSize.size_4xs,
    width: 201,
  },
  iconsaxlinearstar1: {
    top: 144,
    left: 311,
    width: 29,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  taskSetting: {
    borderRadius: Border.br_lg,
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default TaskSetting;
