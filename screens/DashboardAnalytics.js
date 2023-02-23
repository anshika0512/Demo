import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import MenuBar1 from "../components/MenuBar1";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const DashboardAnalytics = () => {
  const navigation = useNavigation();
  const [vectorIcon2Visible, setVectorIcon2Visible] = useState(false);

  const openVectorIcon2 = useCallback(() => {
    setVectorIcon2Visible(true);
  }, []);

  const closeVectorIcon2 = useCallback(() => {
    setVectorIcon2Visible(false);
  }, []);
  return (
    <>
      <View style={styles.dashboardAnalytics}>
        <Image
          style={[
            styles.dashboardAnalyticsChild,
            styles.dashboardPosition,
            styles.dashboardLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <Image
          style={[
            styles.dashboardAnalyticsItem,
            styles.dashboardPosition,
            styles.dashboardLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[styles.dashboardAnalyticsInner, styles.dashboardPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-107.png")}
        />
        <View style={styles.component12}>
          <View style={[styles.component12Child, styles.component12Position]} />
          <View
            style={[styles.component12Item, styles.instanceChildPosition]}
          />
          <View style={[styles.component12Inner, styles.component12Position]} />
          <Text style={[styles.text, styles.textTypo]}>
            ........................
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/vector60.png")}
          />
          <Text style={[styles.m, styles.mClr, styles.mTypo]}>47 m</Text>
          <Text style={[styles.screenTime, styles.mClr, styles.mTypo]}>
            Screen time
          </Text>
          <Text style={[styles.h57M, styles.mTypo]}>4h 57 m</Text>
          <Text style={styles.mMoreThanContainer}>
            <Text style={styles.m1}>32 m</Text>
            <Text style={styles.textTypo}> more than yesterday</Text>
          </Text>
          <View style={styles.rectangleView}>
            <LinearGradient
              style={[styles.instanceChild, styles.instanceChildPosition]}
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
          <Text style={[styles.addedApps, styles.mTypo]}>Added Apps</Text>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/4-11.png")}
          />
          <Text style={[styles.instagram, styles.facebookTypo]}>Instagram</Text>
          <View style={styles.component12Child1} />
          <View
            style={[styles.component12Child2, styles.component12ChildLayout]}
          />
          <Text style={styles.m2}>13 m</Text>
          <Text style={[styles.m3, styles.m3Typo]}>09 m</Text>
          <Text style={[styles.facebook, styles.facebookTypo]}>Facebook</Text>
          <Image
            style={[styles.facebook5Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/facebook-5.png")}
          />
          <Image
            style={[styles.whatsappIconLogoBdc0a8063b, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/whatsappiconlogobdc0a8063bseeklogo-7.png")}
          />
          <Text style={[styles.whatsapp, styles.facebookTypo]}>WhatsApp</Text>
          <View
            style={[styles.component12Child3, styles.component12ChildLayout]}
          />
          <Text style={[styles.m4, styles.m3Typo]}>25 m</Text>
          <Text style={[styles.viewMore, styles.mClr]}>View More</Text>
          <View style={styles.lineView} />
          <Pressable
            style={styles.rectanglePressable}
            onPress={() => navigation.navigate("Usage")}
          />
          <View style={styles.notifications}>
            <Image
              style={[styles.signalIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/signal15.png")}
            />
            <Image
              style={[styles.batteryThreeQuartersIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/batterythreequarters3.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector61.png")}
            />
            <Text style={[styles.am, styles.amTypo]}>8:00 pm</Text>
          </View>
          <Text style={[styles.pro, styles.amTypo]}>Pro</Text>
          <Text style={[styles.digidost, styles.textTypo]}>DigiDost</Text>
          <View style={styles.component12Child4} />
          <Pressable
            style={[styles.todo, styles.todoPosition]}
            onPress={() => navigation.navigate("DashboardTodo")}
          >
            <Text style={styles.todo1}>ToDo</Text>
          </Pressable>
          <Pressable
            style={[styles.addedApps1, styles.todoPosition]}
            onPress={() => navigation.navigate("DashboardAddedAppsLatest1")}
          >
            <Text
              style={[styles.addedApps2, styles.analyticsTypo]}
            >{`Added Apps `}</Text>
          </Pressable>
          <Pressable style={styles.vector} onPress={openVectorIcon2}>
            <Image
              style={[styles.icon1, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/vector6.png")}
            />
          </Pressable>
          <View style={styles.component12Child5} />
          <Text style={[styles.analytics, styles.analyticsTypo]}>
            Analytics
          </Text>
        </View>
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
  component12Position: {
    right: "18.37%",
    width: "81.63%",
    left: "0%",
    position: "absolute",
  },
  instanceChildPosition: {
    right: "0%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  mTypo: {
    left: "6.68%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  facebookTypo: {
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  component12ChildLayout: {
    width: "3.13%",
    position: "absolute",
    borderRadius: Border.br_sm,
  },
  m3Typo: {
    width: "6.89%",
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout1: {
    borderRadius: Border.br_4xs,
    left: "4.59%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    width: "7.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  amTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  todoPosition: {
    top: "15.18%",
    position: "absolute",
  },
  analyticsTypo: {
    width: "21.92%",
    height: "2.61%",
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  dashboardAnalyticsChild: {
    top: 589,
    left: -51,
  },
  dashboardAnalyticsItem: {
    top: -90,
    left: 114,
  },
  dashboardAnalyticsInner: {
    top: 430,
    left: 141,
    width: 338,
    height: 425,
    opacity: 0.6,
  },
  component12Child: {
    height: "23.49%",
    bottom: "76.51%",
    borderBottomLeftRadius: Border.br_3xl,
    backgroundColor: Color.steelblue_200,
    left: "0%",
    top: "0%",
  },
  component12Item: {
    height: "18.74%",
    width: "81.42%",
    bottom: "57.77%",
    left: "18.58%",
    borderBottomLeftRadius: Border.br_xl,
    top: "23.49%",
    backgroundColor: Color.steelblue_200,
  },
  component12Inner: {
    height: "76.51%",
    borderTopRightRadius: Border.br_4xl,
    bottom: "0%",
    top: "23.49%",
    left: "0%",
    backgroundColor: Color.white,
  },
  text: {
    height: "2.25%",
    width: "30.06%",
    top: "44.84%",
    left: "36.74%",
    fontSize: FontSize.size_base,
    color: Color.gray_600,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    height: "1.84%",
    width: "5.32%",
    top: "46.17%",
    right: "24.9%",
    bottom: "51.99%",
    left: "69.78%",
    position: "absolute",
  },
  m: {
    height: "4.27%",
    width: "24.43%",
    top: "48.52%",
    fontSize: FontSize.size_2xl,
  },
  screenTime: {
    top: "29.42%",
    fontSize: FontSize.size_5xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  h57M: {
    top: "34.76%",
    fontSize: FontSize.size_7xl,
    color: Color.darkblue_200,
    textAlign: "left",
    position: "absolute",
  },
  m1: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
  },
  mMoreThanContainer: {
    top: "40.45%",
    left: "7.31%",
    fontSize: FontSize.size_4xs,
    color: Color.firebrick,
    textAlign: "left",
    position: "absolute",
  },
  instanceChild: {
    backgroundColor: "transparent",
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
    borderRadius: Border.br_sm,
  },
  rectangleView: {
    height: "3.8%",
    width: "0.42%",
    top: "56.58%",
    right: "88.31%",
    bottom: "39.62%",
    left: "11.27%",
    position: "absolute",
  },
  addedApps: {
    top: "45.08%",
    fontSize: FontSize.size_lg,
    color: Color.cornflowerblue,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    height: "5.69%",
    top: "74.73%",
    bottom: "19.57%",
    left: "4.59%",
    right: "85.8%",
    width: "9.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  instagram: {
    height: "2.97%",
    width: "20.88%",
    top: "76.87%",
    left: "17.12%",
    textAlign: "center",
  },
  component12Child1: {
    width: "2.92%",
    top: "76.28%",
    right: "24.63%",
    bottom: "22.66%",
    backgroundColor: Color.indigo,
    left: "72.44%",
    height: "1.07%",
    position: "absolute",
    borderRadius: Border.br_sm,
  },
  component12Child2: {
    height: "1.19%",
    top: "83.75%",
    right: "24.43%",
    bottom: "15.07%",
    backgroundColor: Color.mediumorchid,
    left: "72.44%",
  },
  m2: {
    width: "6.47%",
    top: "77.58%",
    fontSize: FontSize.size_6xs,
    left: "68.68%",
    height: "2.14%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  m3: {
    top: "85.17%",
    left: "68.68%",
    height: "2.14%",
    width: "6.89%",
  },
  facebook: {
    height: "4.39%",
    width: "24.63%",
    top: "84.7%",
    left: "17.75%",
    textAlign: "left",
  },
  facebook5Icon: {
    height: "5.93%",
    top: "82.92%",
    bottom: "11.15%",
    right: "85.8%",
    width: "9.6%",
    borderRadius: Border.br_4xs,
  },
  whatsappIconLogoBdc0a8063b: {
    height: "5.81%",
    width: "9.81%",
    top: "66.79%",
    right: "85.59%",
    bottom: "27.4%",
  },
  whatsapp: {
    height: "3.08%",
    width: "21.71%",
    top: "68.68%",
    left: "17.33%",
    textAlign: "center",
  },
  component12Child3: {
    top: "68.09%",
    right: "24.22%",
    bottom: "30.84%",
    backgroundColor: Color.brown,
    left: "72.65%",
    height: "1.07%",
  },
  m4: {
    height: "2.02%",
    top: "69.16%",
    left: "69.1%",
  },
  viewMore: {
    height: "2.37%",
    width: "21.29%",
    top: "93.48%",
    left: "30.06%",
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    fontSize: FontSize.size_3xs,
  },
  lineView: {
    height: "0.12%",
    width: "18.58%",
    top: "95.79%",
    right: "51.88%",
    bottom: "4.09%",
    left: "29.54%",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    position: "absolute",
  },
  rectanglePressable: {
    height: "71.53%",
    width: "75.16%",
    top: "26.22%",
    right: "21.71%",
    bottom: "2.25%",
    left: "3.13%",
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: 70,
    borderBottomRightRadius: Border.br_sm,
    borderBottomLeftRadius: Border.br_sm,
    backgroundColor: Color.gray_500,
    position: "absolute",
  },
  signalIcon: {
    right: "11.41%",
    left: "81.08%",
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  batteryThreeQuartersIcon: {
    right: "0.9%",
    left: "91.59%",
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  vectorIcon1: {
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
    height: "3.56%",
    width: "76.41%",
    top: "0.47%",
    right: "21.29%",
    bottom: "95.97%",
    left: "2.3%",
    position: "absolute",
  },
  pro: {
    top: "6.76%",
    fontSize: FontSize.size_3xs,
    left: "72.65%",
  },
  digidost: {
    width: "23.8%",
    top: "5.93%",
    left: "28.6%",
    fontSize: FontSize.size_3xl,
    color: Color.snow_100,
    textAlign: "left",
    position: "absolute",
  },
  component12Child4: {
    height: "7.71%",
    width: "68.68%",
    top: "12.46%",
    right: "23.59%",
    bottom: "79.83%",
    left: "7.72%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.darkslategray,
    position: "absolute",
  },
  todo1: {
    width: "9.39%",
    height: "2.61%",
    color: Color.white,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  todo: {
    left: "61.59%",
  },
  addedApps2: {
    fontSize: FontSize.size_3xs,
  },
  addedApps1: {
    left: "11.27%",
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
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "4.38%",
    top: "6.41%",
    right: "91.05%",
    bottom: "91%",
    width: "4.57%",
    height: "2.59%",
    position: "absolute",
  },
  component12Child5: {
    height: "4.86%",
    width: "24.84%",
    top: "13.88%",
    right: "41.54%",
    bottom: "81.26%",
    left: "33.61%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.steelblue_200,
    position: "absolute",
  },
  analytics: {
    top: "14.95%",
    left: "36.95%",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  component12: {
    top: 0,
    left: 0,
    width: 479,
    height: 843,
    position: "absolute",
    overflow: "hidden",
  },
  dashboardAnalytics: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
  },
});

export default DashboardAnalytics;
