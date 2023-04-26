import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import globalStyles from "../styles/global.module.css";
import { Formik } from "formik";
import Card from "../shared/card";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
          addReview(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <Card>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
              />
            </Card>

            <Card>
              <TextInput
                style={globalStyles.input}
                multiline
                placeholder="Review details"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
              />
            </Card>

            <Card>
              <TextInput
                style={globalStyles.input}
                placeholder="Rating (1 - 10)"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                keyboardType="numeric"
              />
            </Card>

            <Button color="teal" title="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
