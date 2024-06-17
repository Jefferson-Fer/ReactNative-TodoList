import { StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    marginTop: 20,
    color: Colors.gray300,
    fontSize: 14,
    fontWeight: "bold",
  },
  textSubtitle: {
    color: Colors.gray300,
    fontSize: 14,
  },
});
