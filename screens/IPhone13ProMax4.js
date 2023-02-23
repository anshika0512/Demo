import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13ProMax4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax4}>
      <Text style={[styles.enterPassword, styles.enterTypo]}>
        Enter password
      </Text>
      <Pressable
        style={styles.iphone13ProMax4Child}
        onPress={() => navigation.navigate("IPhone13ProMax3")}
      />
      <View
        style={[
          styles.iphone13ProMax4Item,
          styles.iphone13Layout,
          styles.iphone13Position,
        ]}
      />
      <View
        style={[
          styles.iphone13ProMax4Inner,
          styles.iphone13Layout,
          styles.iphone13Position,
        ]}
      />
      <Text style={styles.alreadyHaveAnContainer}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account? `}</Text>
        <Text style={styles.signIn}>Sign in</Text>
        <Text style={styles.alreadyHaveAn}>{` `}</Text>
      </Text>
      <View style={[styles.lineViewPosition, styles.iphone13Layout]} />
      <View style={[styles.pleaseEnterValidPosition, styles.iphone13Layout]} />
      <Text style={[styles.enterYourFull, styles.enterTypo]}>
        Enter your Full name
      </Text>
      <Text style={[styles.enterYourMail, styles.enterTypo]}>
        Enter your mail
      </Text>
      <Text style={[styles.confirmPassword, styles.enterTypo]}>
        Confirm password
      </Text>
      <Text
        style={[
          styles.pleaseEnterValid,
          styles.pleaseEnterValidPosition,
          styles.pleaseTypo,
          styles.pleaseTypo1,
        ]}
      >
        please enter valid mail
      </Text>
      <Text
        style={[
          styles.pleaseEnterValid1,
          styles.lineViewPosition,
          styles.pleaseTypo,
          styles.pleaseTypo1,
        ]}
      >
        please enter valid name
      </Text>
      <Text style={[styles.register, styles.pleaseTypo]}>REGISTER</Text>
      <Image
        style={styles.social3Icon}
        resizeMode="cover"
        source={require("../assets/social-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  enterTypo: {
    color: Color.steelblue_100,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xl,
    left: 44,
    position: "absolute",
  },
  iphone13Layout: {
    height: 1,
    width: 319,
    borderTopWidth: 1,
    borderColor: "#3d9cdd",
    borderStyle: "solid",
  },
  iphone13Position: {
    left: 44,
    width: 319,
    borderTopWidth: 1,
    borderColor: "#3d9cdd",
    borderStyle: "solid",
    position: "absolute",
  },
  pleaseEnterValidPosition: {
    top: 498,
    left: 44,
    position: "absolute",
  },
  pleaseTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  pleaseTypo1: {
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
  },
  lineViewPosition: {
    top: 393,
    left: 44,
    position: "absolute",
  },
  enterPassword: {
    top: 552,
    textAlign: "left",
  },
  iphone13ProMax4Child: {
    top: 713,
    left: 34,
    backgroundColor: Color.steelblue_100,
    width: 318,
    height: 80,
    position: "absolute",
    borderRadius: Border.br_lg,
  },
  iphone13ProMax4Item: {
    top: 603,
  },
  iphone13ProMax4Inner: {
    top: 685,
  },
  alreadyHaveAn: {
    color: Color.darkturquoise,
  },
  signIn: {
    color: Color.darkblue_100,
  },
  alreadyHaveAnContainer: {
    top: 846,
    left: 51,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    position: "absolute",
  },
  enterYourFull: {
    top: 336,
    textAlign: "left",
  },
  enterYourMail: {
    top: 446,
    textAlign: "left",
  },
  confirmPassword: {
    top: 631,
    textAlign: "left",
  },
  pleaseEnterValid: {
    color: "rgba(241, 56, 56, 0.6)",
    textAlign: "left",
  },
  pleaseEnterValid1: {
    color: "rgba(241, 57, 57, 0.6)",
    textAlign: "left",
  },
  register: {
    marginTop: 309,
    top: "50%",
    left: 100,
    fontSize: FontSize.size_8xl,
    color: "#fcfcfc",
    textAlign: "left",
    position: "absolute",
  },
  social3Icon: {
    top: 0,
    left: 110,
    borderRadius: Border.br_5xl,
    width: 352,
    height: 332,
    position: "absolute",
  },
  iphone13ProMax4: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_lg,
  },
});

export default IPhone13ProMax4;
