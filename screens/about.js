import React from "react";
import { StyleSheet, View, Text } from "react-native";
import globalStyles from "../styles/global.module.css";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About The App!</Text>
      <Text style={globalStyles.paragraph}>
        This is an application to keep track and rate both tv shows and movies
        you are in the process of watching or have watched in the past. You can
        rank them on a scale from 1 to 10 and tell your friends which ones you
        would reccommend and what you really hated watching.
      </Text>
    </View>
  );
}
