import { Image, Pressable, Text, View } from "react-native";

import { Tasks } from "../../src/(home)";
import { styles } from "./styles";

interface ListTasksProps {
  task: Tasks;
  onTaskRemove: (task: Tasks) => void;
  onTaskChecked: (taskChecked: Tasks) => void;
}

const ListTasks = ({ task, onTaskRemove, onTaskChecked }: ListTasksProps) => {
  return (
    <View style={styles.listTasks}>
      <View style={styles.checkTask}>
        <Pressable onPress={() => onTaskChecked(task)}>
          {task.complete === false ? (
            <Image source={require("../../assets/check.png")} />
          ) : (
            <Image source={require("../../assets/checked.png")} />
          )}
        </Pressable>
        <Text
          style={task.complete === false ? styles.text : styles.textChecked}
        >
          {task.name}
        </Text>
      </View>
      <Pressable onPress={() => onTaskRemove(task)}>
        <Image source={require("../../assets/trash.png")} />
      </Pressable>
    </View>
  );
};

export default ListTasks;
