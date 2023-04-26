import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import FormData from "../screens/formData";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title="Your Reviews" navigation={navigation} />
        ),
      };
    },
  },
  FormData: {
    screen: FormData,
    navigationOptions: {
      title: "Form Data",
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "teal", height: 100 },
  },
});

export default HomeStack;
