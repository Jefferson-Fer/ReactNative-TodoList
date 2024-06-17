import { StyleSheet } from "react-native";

import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 220,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.gray700,
  },
  imageLogo: {
    marginTop: 100,
  },
  form: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 25,
    marginBottom: -28,
    alignItems: "center",
    justifyContent: "center",
  },
  inputTask: {
    flex: 1,
    padding: 15,
    borderRadius: 6,
    fontSize: 16,
    color: Colors.gray100,
    backgroundColor: Colors.gray500,
  },
  buttonAddTask: {
    padding: 20,
    borderRadius: 6,
    backgroundColor: Colors.blueDark,
    alignItems: "center",
    justifyContent: "center",
  },
});
