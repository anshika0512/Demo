import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuBar1 from "../components/MenuBar1";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DashboardTodo2 = () => {
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
      <View style={styles.dashboardTodo2}>
        <Image
          style={[styles.dashboardTodo2Child, styles.dashboardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={[styles.dashboardTodo2Item, styles.dashboardLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={styles.dashboardTodo2Inner}
          resizeMode="cover"
          source={require("../assets/ellipse-105.png")}
        />
        <View style={[styles.notifications, styles.notificationsLayout]}>
          <Image
            style={[styles.signalIcon, styles.iconLayout1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/signal2.png")}
          />
          <Image
            style={[
              styles.batteryThreeQuartersIcon,
              styles.iconLayout1,
              styles.iconLayout2,
            ]}
            resizeMode="cover"
            source={require("../assets/batterythreequarters2.png")}
          />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Text
            style={[
              styles.am,
              styles.amFlexBox,
              styles.amTypo,
              styles.amPosition,
            ]}
          >
            8:00 pm
          </Text>
        </View>
        <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
        <View style={[styles.dashboardTodo2Child1, styles.component13Layout]} />
        <View
          style={[styles.dashboardTodo2Child2, styles.rectangleViewPosition]}
        />
        <View style={[styles.notifications1, styles.notificationsLayout]}>
          <Image
            style={[styles.signalIcon, styles.iconLayout1, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/signal10.png")}
          />
          <Image
            style={[
              styles.batteryThreeQuartersIcon,
              styles.iconLayout1,
              styles.iconLayout2,
            ]}
            resizeMode="cover"
            source={require("../assets/batterythreequarters3.png")}
          />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector41.png")}
          />
          <Text style={[styles.am1, styles.am1Typo, styles.amPosition]}>
            8:00 pm
          </Text>
        </View>
        <Pressable
          style={styles.pro}
          onPress={() => navigation.navigate("ProVersion")}
        >
          <Text style={[styles.pro1, styles.am1Typo]}>Pro</Text>
        </Pressable>
        <Text style={[styles.digidost, styles.amFlexBox, styles.amTypo]}>
          DigiDost
        </Text>
        <View style={styles.dashboardTodo2Child3} />
        <Pressable
          style={[styles.analytics, styles.todoPosition]}
          onPress={() => navigation.navigate("DashboardAnalytics")}
        >
          <Text style={[styles.analytics1, styles.todoTypo]}>Analytics</Text>
        </Pressable>
        <View style={styles.dashboardTodo2Child4} />
        <Text style={[styles.todo, styles.todoTypo, styles.todoPosition]}>
          ToDo
        </Text>
        <Pressable
          style={[styles.addedApps, styles.todoPosition]}
          onPress={() => navigation.navigate("DashboardAddedAppsLatest1")}
        >
          <Text
            style={[styles.analytics1, styles.todoTypo]}
          >{`Added Apps `}</Text>
        </Pressable>
        <Pressable style={styles.vector} onPress={openVectorIcon2}>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector6.png")}
          />
        </Pressable>
        <Image
          style={[styles.rectangleIcon, styles.component13Layout]}
          resizeMode="cover"
          source={require("../assets/rectangle-371.png")}
        />
        <View style={styles.pexelsLumn1676992} />
        <View
          style={[styles.dashboardTodo2Child5, styles.dashboardChildLayout]}
        />
        <Text style={[styles.myDay, styles.amFlexBox, styles.amTypo]}>
          My Day
        </Text>
        <Text style={[styles.sunday18Sep, styles.amFlexBox]}>
          Sunday, 18 Sep
        </Text>
        <Text style={[styles.assigned, styles.amTypo]}>
          <Text style={styles.assigned1}>
            <Text style={styles.assigned2}>Assigned</Text>
            <Text>:</Text>
            <Text>{` `}</Text>
          </Text>
        </Text>
        <View style={[styles.component13, styles.component13Layout]}>
          <Pressable
            style={[styles.component13Child, styles.component13Position]}
            onPress={() => navigation.navigate("TaskSetting")}
          />
          <Text style={styles.fri16Sep}>Fri, 16 Sep</Text>
          <Image
            style={[
              styles.vectorIcon2,
              styles.vectorIconPosition1,
              styles.iconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/vector43.png")}
          />
          <Image
            style={[styles.component3Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/component-3.png")}
          />
          <Text style={[styles.study, styles.yogaTypo]}>Study</Text>
          <Text style={[styles.tasks, styles.tasksTypo]}>Tasks</Text>
          <Text style={styles.text}>.</Text>
          <View style={[styles.component13Item, styles.component13Position]} />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector44.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>.</Text>
          <Text style={[styles.today, styles.todayPosition]}>Today</Text>
          <Text style={[styles.text2, styles.todayPosition]}>16:00</Text>
          <Image
            style={[
              styles.vectorIcon4,
              styles.vectorIconPosition,
              styles.vectorIconPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/vector43.png")}
          />
          <Image
            style={[styles.component5Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/component-3.png")}
          />
          <Text style={[styles.yoga, styles.yogaTypo]}>Yoga</Text>
          <Text style={[styles.tasks1, styles.tasksTypo]}>Tasks</Text>
          <Text style={[styles.text3, styles.textTypo]}>.</Text>
          <Pressable
            style={styles.iconsaxlinearstar1}
            onPress={() => navigation.navigate("TaskSetting")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/iconsaxlinearstar11.png")}
            />
          </Pressable>
          <Image
            style={[styles.vectorIcon5, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector46.png")}
          />
        </View>
        <View
          style={[styles.dashboardTodo2Child6, styles.dashboardChildLayout]}
        />
        <Text style={[styles.completed1, styles.amFlexBox, styles.amTypo]}>
          {" "}
          Completed : 1
        </Text>
        <Image
          style={[styles.vectorIcon6, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector47.png")}
        />
        <Image
          style={styles.pngTransparentComputerIcons}
          resizeMode="cover"
          source={require("../assets/pngtransparentcomputericonsaddlogodesktopwallpaperaddthumbnailremovebgpreview-2.png")}
        />
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("DashboardTodo")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector48.png")}
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
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout2: {
    width: "7.51%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  amFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  amTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  amPosition: {
    fontSize: FontSize.size_5xs,
    left: "3.3%",
    top: "16%",
  },
  rectangleViewPosition: {
    width: 391,
    left: 0,
    position: "absolute",
  },
  component13Layout: {
    width: 390,
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
  todoTypo: {
    height: 22,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  dashboardChildLayout: {
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  component13Position: {
    backgroundColor: Color.gray_400,
    left: "0%",
    right: "0%",
    height: "48.44%",
    position: "absolute",
    width: "100%",
  },
  vectorIconPosition1: {
    left: "32.56%",
    right: "64.1%",
    width: "3.33%",
    height: "10.16%",
  },
  iconLayout: {
    left: "6.15%",
    right: "84.62%",
    width: "9.23%",
    height: "25.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  yogaTypo: {
    left: "17.69%",
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  tasksTypo: {
    color: Color.gray_300,
    left: "17.69%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconPosition: {
    top: "81.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    top: "75.78%",
    width: "1.28%",
    fontFamily: FontFamily.interRegular,
    height: "14.84%",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  todayPosition: {
    color: Color.lightseagreen,
    top: "79.69%",
    fontFamily: FontFamily.interRegular,
    height: "14.84%",
    textAlign: "left",
    position: "absolute",
  },
  dashboardTodo2Child: {
    top: 589,
    left: -51,
    display: "none",
  },
  dashboardTodo2Item: {
    top: -90,
    left: 114,
    display: "none",
  },
  dashboardTodo2Inner: {
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
    bottom: "0%",
    top: "0%",
  },
  batteryThreeQuartersIcon: {
    right: "0.9%",
    left: "91.59%",
    bottom: "0%",
    top: "0%",
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
  },
  notifications: {
    top: 7,
    left: 17,
    width: 386,
    display: "none",
  },
  rectangleView: {
    top: 0,
    borderBottomLeftRadius: Border.br_3xl,
    height: 198,
    backgroundColor: Color.steelblue_200,
  },
  dashboardTodo2Child1: {
    left: 94,
    borderBottomLeftRadius: Border.br_xl,
    height: 158,
    top: 198,
    backgroundColor: Color.steelblue_200,
  },
  dashboardTodo2Child2: {
    borderTopRightRadius: Border.br_4xl,
    height: 603,
    top: 198,
    backgroundColor: Color.white,
    width: 391,
    left: 0,
  },
  am1: {
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
  },
  dashboardTodo2Child3: {
    top: 105,
    left: 37,
    borderRadius: Border.br_xs,
    backgroundColor: Color.darkslategray,
    width: 329,
    height: 65,
    position: "absolute",
  },
  analytics1: {
    width: 105,
    fontSize: FontSize.size_3xs,
  },
  analytics: {
    left: 185,
  },
  dashboardTodo2Child4: {
    top: 117,
    left: 270,
    borderRadius: Border.br_5xs,
    width: 83,
    height: 41,
    backgroundColor: Color.steelblue_200,
    position: "absolute",
  },
  todo: {
    left: 290,
    fontSize: FontSize.size_sm,
    width: 56,
  },
  addedApps: {
    left: 54,
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
    height: "100%",
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
  rectangleIcon: {
    top: 789,
    left: 484,
    height: 62,
  },
  pexelsLumn1676992: {
    top: 337,
    left: 371,
    width: 37,
    height: 36,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
  },
  dashboardTodo2Child5: {
    top: 218,
    left: 12,
    backgroundColor: Color.gray_100,
    width: 161,
    height: 28,
  },
  myDay: {
    top: 221,
    left: 19,
    fontSize: FontSize.size_base,
    width: 120,
    height: 20,
    color: Color.black,
  },
  sunday18Sep: {
    top: 261,
    left: 23,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiboldItalic,
    width: 202,
    height: 32,
    fontSize: FontSize.size_2xl,
    color: Color.black,
  },
  assigned2: {
    fontSize: FontSize.size_2xl,
  },
  assigned1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  assigned: {
    top: 306,
    left: -43,
    textAlign: "center",
    width: 233,
    height: 45,
    color: Color.black,
    position: "absolute",
  },
  component13Child: {
    bottom: "51.56%",
    top: "0%",
  },
  fri16Sep: {
    top: "28.13%",
    color: Color.red,
    fontFamily: FontFamily.interRegular,
    height: "14.84%",
    fontSize: FontSize.size_4xs,
    left: "38.21%",
    width: "22.82%",
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon2: {
    top: "29.69%",
    bottom: "60.16%",
    position: "absolute",
  },
  component3Icon: {
    top: "9.38%",
    bottom: "64.84%",
  },
  study: {
    top: "3.91%",
  },
  tasks: {
    top: "27.34%",
  },
  text: {
    top: "24.22%",
    left: "29.74%",
    width: "1.28%",
    fontFamily: FontFamily.interRegular,
    height: "14.84%",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  component13Item: {
    top: "51.56%",
    bottom: "0%",
  },
  vectorIcon3: {
    height: "10.94%",
    width: "3.59%",
    right: "42.56%",
    bottom: "7.81%",
    left: "53.85%",
  },
  text1: {
    left: "51.54%",
  },
  today: {
    fontSize: FontSize.size_4xs,
    left: "38.21%",
    width: "22.82%",
    color: Color.lightseagreen,
    top: "79.69%",
  },
  text2: {
    width: "15.64%",
    left: "58.72%",
    fontSize: FontSize.size_3xs,
  },
  vectorIcon4: {
    bottom: "8.59%",
  },
  component5Icon: {
    top: "60.94%",
    bottom: "13.28%",
  },
  yoga: {
    top: "55.47%",
  },
  tasks1: {
    top: "78.91%",
  },
  text3: {
    left: "29.74%",
  },
  iconsaxlinearstar1: {
    left: "88.97%",
    top: "10.94%",
    right: "3.59%",
    bottom: "66.41%",
    width: "7.44%",
    height: "22.66%",
    position: "absolute",
  },
  vectorIcon5: {
    height: "19.9%",
    width: "6.58%",
    top: "63.48%",
    right: "3.87%",
    bottom: "16.62%",
    left: "89.55%",
    position: "absolute",
  },
  component13: {
    top: 358,
    left: 1,
    height: 128,
  },
  dashboardTodo2Child6: {
    top: 541,
    backgroundColor: Color.gray_200,
    width: 208,
    height: 34,
    left: 11,
  },
  completed1: {
    top: 544,
    left: 14,
    width: 243,
    height: 31,
    fontSize: FontSize.size_2xl,
    color: Color.black,
  },
  vectorIcon6: {
    height: "1.53%",
    width: "5.47%",
    top: "26.66%",
    right: "58.38%",
    bottom: "71.81%",
    left: "36.15%",
    position: "absolute",
  },
  pngTransparentComputerIcons: {
    top: 749,
    left: 307,
    width: 59,
    height: 60,
    position: "absolute",
  },
  vector1: {
    left: "6.73%",
    top: "65.08%",
    right: "91.06%",
    bottom: "32.87%",
    width: "2.2%",
    height: "2.05%",
    position: "absolute",
  },
  dashboardTodo2: {
    borderRadius: Border.br_sm,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default DashboardTodo2;
