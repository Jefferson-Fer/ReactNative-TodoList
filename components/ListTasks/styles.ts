import { StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  listTasks: {
    flexDirection: "row",
    padding: 5,
    marginTop: 10,
    backgroundColor: Colors.gray400,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
  },
  checkTask: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 14,
    color: Colors.gray100,
  },
  textChecked: {
    fontSize: 14,
    textDecorationLine: "line-through",
    textDecorationColor: Colors.gray300,
    color: Colors.gray300,
  },
});
