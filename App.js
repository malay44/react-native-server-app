import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import nodejs from "nodejs-mobile-react-native";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    nodejs.start("main.js");
    nodejs.channel.addListener("message", (msg) => {
      console.log("From node: " + msg);
    });
  });

  return (
    <View style={styles.container}>
      <Text>App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
