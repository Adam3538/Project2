import React from "react";
import { StyleSheet, View } from "react-native";
import styles from "../styles/card.module.css";

export default function card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}
