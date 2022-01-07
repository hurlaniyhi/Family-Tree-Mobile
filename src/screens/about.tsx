import React from "react";
import { View, StyleSheet, Text } from "react-native";

const About: React.FC<any> = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the about screen</Text>
      <Text onPress={()=> navigation.navigate("Contact")}>Go to contact screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default About;