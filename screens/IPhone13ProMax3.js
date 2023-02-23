import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Margin } from "../GlobalStyles";

const IPhone13ProMax3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax3}>
      <Text style={[styles.email, styles.textTypo1, styles.emailTypo]}>
        Email
      </Text>
      <Pressable
        style={[
          styles.iphone13ProMax3Child,
          styles.iphone13ProMax3ChildPosition,
        ]}
        onPress={() => navigation.navigate("DashboardAddedAppsLatest1")}
      />
      <View style={[styles.iphone13ProMax3Item, styles.iphone13Layout]} />
      <View style={[styles.iphone13ProMax3Inner, styles.iphone13Layout]} />
      <Text style={[styles.password, styles.textTypo1, styles.emailTypo]}>
        Password
      </Text>
      <Text style={[styles.forgotPassword, styles.textTypo]}>
        Forgot password?
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text
        style={[
          styles.welcomeToDigidostContainer,
          styles.iphone13ProMax3ChildPosition,
        ]}
      >
        <Text style={styles.welcomeTo}>Welcome To</Text>
        <Text style={styles.digidost}>DigiDost</Text>
      </Text>
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("IPhone13ProMax4")}
      >
        <Text style={[styles.textTypo, styles.textTypo1]}>
          <Text style={styles.dontHaveAn}>Don’t have an account</Text>
          <Text style={styles.signUp}>?sign up</Text>
        </Text>
      </Pressable>
      <Image
        style={styles.lock1Icon}
        resizeMode="cover"
        source={require("../assets/lock-1.png")}
      />
      <View style={styles.lineView} />
      <Text style={[styles.signIn, styles.textTypo1]}>SIGN IN</Text>
      <Image
        style={styles.social2Icon}
        resizeMode="cover"
        source={require("../assets/social-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  emailTypo: {
    fontSize: FontSize.size_5xl,
    left: 46,
    textAlign: "left",
    color: Color.steelblue_100,
    fontWeight: "500",
    position: "absolute",
  },
  iphone13ProMax3ChildPosition: {
    width: 318,
    left: 35,
    position: "absolute",
  },
  iphone13Layout: {
    height: 1,
    width: 319,
    borderTopWidth: 1,
    borderColor: "#3d9cdd",
    borderStyle: "solid",
    left: 49,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  email: {
    top: 479,
    textAlign: "left",
    color: Color.steelblue_100,
  },
  iphone13ProMax3Child: {
    top: 699,
    backgroundColor: Color.steelblue_100,
    height: 80,
    borderRadius: Border.br_lg,
  },
  iphone13ProMax3Item: {
    top: 539,
  },
  iphone13ProMax3Inner: {
    top: 613,
  },
  password: {
    top: 556,
    width: 171,
    height: 41,
    textAlign: "left",
    color: Color.steelblue_100,
  },
  forgotPassword: {
    top: 629,
    left: 53,
    fontFamily: FontFamily.montserratRegular,
    color: Color.steelblue_100,
    position: "absolute",
  },
  ellipseIcon: {
    top: -61,
    left: 91,
    width: 425,
    height: 349,
    display: "none",
    position: "absolute",
  },
  welcomeTo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  digidost: {
    margin: Margin.m_md,
  },
  welcomeToDigidostContainer: {
    top: 326,
    fontSize: 45,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    height: 110,
    textAlign: "left",
    color: Color.steelblue_100,
  },
  dontHaveAn: {
    color: Color.steelblue_100,
  },
  signUp: {
    color: Color.darkblue_100,
  },
  dontHaveAnContainer: {
    left: 29,
    top: 789,
    position: "absolute",
  },
  lock1Icon: {
    top: 147,
    left: 309,
    width: 60,
    height: 54,
    position: "absolute",
  },
  lineView: {
    top: 136,
    left: 339,
    borderStyle: "dashed",
    borderColor: "#000",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 1,
    height: 20,
    position: "absolute",
  },
  signIn: {
    top: 717,
    left: 125,
    fontSize: FontSize.size_8xl,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  social2Icon: {
    top: 0,
    left: 110,
    borderRadius: Border.br_5xl,
    width: 352,
    height: 332,
    position: "absolute",
  },
  iphone13ProMax3: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_lg,
  },
});

export default IPhone13ProMax3;
