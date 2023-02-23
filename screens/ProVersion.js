import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Margin } from "../GlobalStyles";

const ProVersion = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.proVersion}>
      <View style={[styles.component15, styles.component15Layout]}>
        <View style={[styles.component15Child, styles.childBg]} />
        <View style={styles.component15Item} />
        <View style={styles.component15Inner} />
      </View>
      <View style={styles.notifications}>
        <Image
          style={[styles.signalIcon, styles.iconLayout, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/signal1.png")}
        />
        <Image
          style={[
            styles.batteryThreeQuartersIcon,
            styles.iconLayout,
            styles.iconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/batterythreequarters1.png")}
        />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector18.png")}
        />
        <Text style={styles.am}>8:00 pm</Text>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("DashboardAddedAppsLatest1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Text style={[styles.proVersion1, styles.proTypo]}>Pro Version</Text>
      <View style={styles.proVersionChild} />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector20.png")}
      />
      <Text style={[styles.getProVersion, styles.proTypo]}>
        Get Pro Version
      </Text>
      <Text style={[styles.proFeatures, styles.noAdsTypo]}>Pro Features:</Text>
      <View style={[styles.proVersionItem, styles.component15Layout]} />
      <View style={[styles.proVersionInner, styles.proShadowBox]} />
      <Text style={[styles.months, styles.monthsTypo, styles.monthsPosition]}>
        Months
      </Text>
      <Text style={[styles.text, styles.textTypo1, styles.textPosition]}>
        6
      </Text>
      <Text style={[styles.text1, styles.textTypo1]}>1</Text>
      <View style={[styles.rectangleView, styles.proShadowBox]} />
      <Text style={[styles.months1, styles.monthsTypo, styles.monthsPosition]}>
        Months
      </Text>
      <Text style={[styles.text2, styles.textTypo1, styles.textPosition]}>
        12
      </Text>
      <View style={[styles.proVersionChild1, styles.proShadowBox]} />
      <Text style={styles.text3}>59</Text>
      <View style={styles.exportAnalyticsInCsvOrXlsParent}>
        <Text style={[styles.exportAnalyticsIn, styles.noAdsTypo]}>
          Export Analytics in CSV or XLS
        </Text>
        <Text style={[styles.customizableBlockScreen, styles.noAdsTypo]}>
          Customizable Block Screen
        </Text>
        <Text style={[styles.noAds, styles.noAdsTypo]}>No Ads</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector21.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector21.png")}
        />
        <Text style={[styles.adFreeExperience, styles.containerTypo]}>
          100% Ad Free Experience
        </Text>
        <Text style={[styles.exportAnalyticsOf, styles.containerTypo]}>
          Export Analytics of upto 2 Year
        </Text>
        <Text style={[styles.fullAccessToContainer, styles.noAdsTypo]}>
          <Text
            style={styles.fullAccessTo}
          >{`Full access to Strict Mode and `}</Text>
          <Text style={styles.lockMode}>{`Lock Mode `}</Text>
        </Text>
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector21.png")}
        />
        <Text style={[styles.getFullAccessContainer, styles.containerTypo]}>
          <Text
            style={styles.fullAccessTo}
          >{`Get Full access of Strict Mode and `}</Text>
          <Text
            style={styles.fullAccessTo}
          >{`Lock Mode more than 6 hours and `}</Text>
          <Text style={styles.lockMode}>can also do parenting control</Text>
        </Text>
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector21.png")}
        />
        <Text
          style={[styles.customizeYourBlockContainer, styles.containerTypo]}
        >
          <Text
            style={styles.fullAccessTo}
          >{`Customize your block screen with `}</Text>
          <Text style={styles.lockMode}>your stubborn images and text</Text>
        </Text>
        <Image
          style={[styles.vectorIcon6, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector21.png")}
        />
        <Text style={[styles.getMultipleThemes, styles.noAdsTypo]}>
          Get Multiple Themes
        </Text>
        <Text style={[styles.getAccessToContainer, styles.containerTypo]}>
          <Text
            style={styles.fullAccessTo}
          >{`Get access to multiple themes and `}</Text>
          <Text style={styles.lockMode}>
            apply them according to your choice
          </Text>
        </Text>
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector26.png")}
        />
        <Text style={[styles.pinProtection, styles.noAdsTypo]}>
          Pin Protection
        </Text>
        <Text style={[styles.lockTheAppContainer, styles.containerTypo]}>
          <Text
            style={styles.fullAccessTo}
          >{`Lock the app with PIN Protection to `}</Text>
          <Text style={styles.lockMode}>
            prevent others from changing setting
          </Text>
        </Text>
      </View>
      <Text style={[styles.text4, styles.textTypo1]}>1</Text>
      <Text style={[styles.month, styles.monthsTypo, styles.monthsPosition]}>
        Month
      </Text>
      <Image
        style={styles.vectorIcon8}
        resizeMode="cover"
        source={require("../assets/vector27.png")}
      />
      <Text style={[styles.text5, styles.textTypo]}>299</Text>
      <Image
        style={[styles.vectorIcon9, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector27.png")}
      />
      <Text style={[styles.text6, styles.textTypo]}>499</Text>
      <Image
        style={[styles.vectorIcon10, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector27.png")}
      />
      <View style={[styles.proVersionChild2, styles.childBg]} />
      <Text style={[styles.subscribe, styles.monthsTypo]}>SUBSCRIBE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component15Layout: {
    width: 391,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.steelblue_200,
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
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  proTypo: {
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 30,
    position: "absolute",
  },
  noAdsTypo: {
    color: Color.black,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  proShadowBox: {
    height: 114,
    width: 87,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 658,
    position: "absolute",
    backgroundColor: Color.white,
  },
  monthsTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  monthsPosition: {
    top: 715,
    fontSize: FontSize.size_3xs,
    color: Color.black,
  },
  textTypo1: {
    fontSize: FontSize.size_7xl,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textPosition: {
    top: 668,
    fontSize: FontSize.size_7xl,
  },
  vectorIconLayout1: {
    left: "7.46%",
    right: "84.83%",
    width: "7.71%",
    height: "8.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  containerTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    position: "absolute",
  },
  textTypo: {
    top: 745,
    color: Color.limegreen,
    fontSize: FontSize.size_8xs,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "10.55%",
    top: "88.63%",
    width: "1.03%",
    height: "0.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component15Child: {
    height: "14.81%",
    bottom: "85.19%",
    borderBottomLeftRadius: Border.br_2xl,
    left: "0%",
    right: "0%",
    backgroundColor: Color.steelblue_200,
    top: "0%",
    width: "100%",
  },
  component15Item: {
    height: "18.72%",
    width: "77.24%",
    bottom: "66.47%",
    left: "22.76%",
    borderBottomLeftRadius: Border.br_xl,
    top: "14.81%",
    backgroundColor: Color.steelblue_200,
    right: "0%",
    position: "absolute",
  },
  component15Inner: {
    height: "85.19%",
    borderTopRightRadius: Border.br_3xl,
    bottom: "0%",
    top: "14.81%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  component15: {
    top: 0,
    left: 0,
    height: 844,
    width: 391,
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
    left: "3.3%",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: "16%",
    position: "absolute",
  },
  notifications: {
    top: 1,
    left: 3,
    width: 386,
    height: 30,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
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
  proVersion1: {
    top: 47,
    left: 57,
    width: 188,
    color: Color.white,
  },
  proVersionChild: {
    top: 152,
    left: 17,
    borderRadius: Border.br_3xs,
    backgroundColor: "#f8ffa3",
    width: 86,
    height: 83,
    position: "absolute",
  },
  vectorIcon1: {
    height: "7.7%",
    width: "19.23%",
    top: "19.08%",
    right: "74.87%",
    bottom: "73.22%",
    left: "5.9%",
    position: "absolute",
  },
  getProVersion: {
    top: 177,
    left: 121,
    color: "#fcc12a",
    width: 222,
  },
  proFeatures: {
    top: 242,
    left: 111,
    textDecoration: "underline",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 168,
    textAlign: "center",
    height: 30,
  },
  proVersionItem: {
    top: 643,
    left: -1,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    height: 204,
  },
  proVersionInner: {
    left: 154,
    borderStyle: "solid",
    borderColor: "#0da600",
    borderWidth: 2,
  },
  months: {
    left: 167,
  },
  text: {
    left: 186,
  },
  text1: {
    top: 676,
    left: 62,
  },
  rectangleView: {
    left: 271,
  },
  months1: {
    left: 284,
  },
  text2: {
    left: 295,
  },
  proVersionChild1: {
    left: 33,
  },
  text3: {
    top: 744,
    left: 71,
    color: Color.limegreen,
    fontSize: FontSize.size_8xs,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  exportAnalyticsIn: {
    top: "16.05%",
    left: "20.05%",
    textAlign: "center",
  },
  customizableBlockScreen: {
    top: "66.76%",
    left: "20.05%",
    textAlign: "left",
  },
  noAds: {
    left: "20.05%",
    textAlign: "center",
    top: "0%",
    fontSize: FontSize.size_xs,
  },
  vectorIcon2: {
    top: "0.86%",
    bottom: "90.54%",
  },
  vectorIcon3: {
    top: "17.19%",
    bottom: "74.21%",
  },
  adFreeExperience: {
    top: "6.88%",
    left: "20.05%",
    textAlign: "center",
  },
  exportAnalyticsOf: {
    top: "23.21%",
    left: "19.79%",
    textAlign: "center",
  },
  fullAccessTo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  lockMode: {
    margin: Margin.m_md,
  },
  fullAccessToContainer: {
    top: "32.66%",
    left: "20.05%",
    textAlign: "left",
  },
  vectorIcon4: {
    top: "34.1%",
    bottom: "57.31%",
  },
  getFullAccessContainer: {
    top: "47.28%",
    left: "20.05%",
    textAlign: "left",
  },
  vectorIcon5: {
    top: "67.62%",
    bottom: "23.78%",
  },
  customizeYourBlockContainer: {
    top: "73.64%",
    left: "20.05%",
    textAlign: "left",
  },
  vectorIcon6: {
    top: "88.54%",
    bottom: "2.87%",
  },
  getMultipleThemes: {
    top: "87.97%",
    left: "20.05%",
    textAlign: "left",
  },
  getAccessToContainer: {
    top: "95.13%",
    left: "20.05%",
    textAlign: "left",
  },
  vectorIcon7: {
    top: "109.46%",
    bottom: "-18.05%",
  },
  pinProtection: {
    top: "108.6%",
    left: "20.05%",
    textAlign: "left",
  },
  lockTheAppContainer: {
    top: "115.76%",
    left: "20.05%",
    textAlign: "left",
  },
  exportAnalyticsInCsvOrXlsParent: {
    top: 281,
    width: 389,
    height: 349,
    left: 0,
    position: "absolute",
  },
  text4: {
    top: 671,
    left: 66,
  },
  month: {
    left: 51,
  },
  vectorIcon8: {
    top: "88.51%",
    right: "82.31%",
    bottom: "10.66%",
    left: "16.67%",
    width: "1.03%",
    height: "0.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text5: {
    left: 191,
  },
  vectorIcon9: {
    right: "51.79%",
    left: "47.18%",
  },
  text6: {
    left: 310,
  },
  vectorIcon10: {
    right: "21.03%",
    left: "77.95%",
  },
  proVersionChild2: {
    top: 791,
    left: 86,
    borderRadius: Border.br_6xs,
    width: 218,
    height: 31,
  },
  subscribe: {
    top: 797,
    left: 149,
    color: Color.white,
  },
  proVersion: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    height: 844,
  },
});

export default ProVersion;
