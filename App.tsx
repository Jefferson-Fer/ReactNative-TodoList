import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Colors } from "./constants/Colors";
import Home from "./src/(home)";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: Colors.gray600,
  },
});
