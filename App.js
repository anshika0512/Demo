const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone13ProMax6 from "./screens/IPhone13ProMax6";
import AddAppLatest from "./screens/AddAppLatest";
import DashboardAddedAppsLatest from "./screens/DashboardAddedAppsLatest";
import AddingProcess from "./screens/AddingProcess";
import Usage from "./screens/Usage";
import ProVersion from "./screens/ProVersion";
import EDIT from "./screens/EDIT";
import TaskSetting from "./screens/TaskSetting";
import DashboardTodo2 from "./screens/DashboardTodo2";
import DashboardTodo from "./screens/DashboardTodo";
import INSTAGRAM1 from "./screens/INSTAGRAM1";
import IPhone1313Pro4 from "./screens/IPhone1313Pro4";
import DashboardAnalytics from "./screens/DashboardAnalytics";
import AddApp from "./screens/AddApp";
import DashboardAddedAppsLatest1 from "./screens/DashboardAddedAppsLatest1";
import IPhone13ProMax4 from "./screens/IPhone13ProMax4";
import IPhone13ProMax3 from "./screens/IPhone13ProMax3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Abril Fatface": require("./assets/fonts/Abril_Fatface.ttf"),
    "Abril Fatface_regular": require("./assets/fonts/Abril_Fatface_regular.ttf"),
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Inter_extrabold: require("./assets/fonts/Inter_extrabold.ttf"),
    Inter_semibold_italic: require("./assets/fonts/Inter_semibold_italic.ttf"),
    "Open Sans": require("./assets/fonts/Open_Sans.ttf"),
    "Open Sans_regular": require("./assets/fonts/Open_Sans_regular.ttf"),
    "Open Sans_semibold": require("./assets/fonts/Open_Sans_semibold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="IPhone13ProMax6"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="IPhone13ProMax6"
              component={IPhone13ProMax6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddAppLatest"
              component={AddAppLatest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardAddedAppsLatest"
              component={DashboardAddedAppsLatest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddingProcess"
              component={AddingProcess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Usage"
              component={Usage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProVersion"
              component={ProVersion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EDIT"
              component={EDIT}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TaskSetting"
              component={TaskSetting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardTodo2"
              component={DashboardTodo2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardTodo"
              component={DashboardTodo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="INSTAGRAM1"
              component={INSTAGRAM1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone1313Pro4"
              component={IPhone1313Pro4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardAnalytics"
              component={DashboardAnalytics}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddApp"
              component={AddApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardAddedAppsLatest1"
              component={DashboardAddedAppsLatest1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax4"
              component={IPhone13ProMax4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax3"
              component={IPhone13ProMax3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
