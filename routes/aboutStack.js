import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="About" navigation={navigation} />,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "teal", height: 100 },
  },
});

export default AboutStack;
