import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../styles/global.module.css";
import Card from "../shared/card";
import styles from "../styles/formDataStyles.module.css";

export default function FormData({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>

        <View style={styles.rating}>
          <Text>Rating: {navigation.getParam("rating")} / 10</Text>
          <Text></Text>
        </View>
      </Card>
    </View>
  );
}
