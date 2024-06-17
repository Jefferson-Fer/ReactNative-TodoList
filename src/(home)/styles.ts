import { StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {},
  containerTasks: {
    paddingTop: 50,
    paddingHorizontal: 25,
  },
  headerList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countTasks: {
    flexDirection: "row",
    gap: 10,
  },
  textCountCreate: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.blue,
  },
  textCountComplete: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.purple,
  },
  textCount: {
    paddingHorizontal: 7,
    borderRadius: 999,
    backgroundColor: Colors.gray400,
    color: Colors.gray200,
  },
  border: {
    marginVertical: 20,
    backgroundColor: Colors.gray400,
    height: 1,
  },
  containerListTasks: {
    width: "100%",
  },
});
