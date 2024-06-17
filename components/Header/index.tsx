import { useState } from "react";
import { Alert, Image, Pressable, TextInput, View } from "react-native";

import { Colors } from "../../constants/Colors";
import { styles } from "./styles";

interface ParticipantProps {
  TaskAdd: (task: string) => void;
}

const Header = ({ TaskAdd }: ParticipantProps) => {
  const [taskName, setTaskName] = useState<string>("");
  const handleTaskAdd = () => {
    if (taskName === "") {
      return Alert.alert("Erro", "Adicione o nome da tarefa!");
    }

    setTaskName("");
    TaskAdd(taskName);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        source={require("../../assets/logo.png")}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.inputTask}
          onChangeText={setTaskName}
          defaultValue={taskName}
          placeholder="Adicione  uma nova tarefa"
          placeholderTextColor={Colors.gray300}
        />
        <Pressable style={styles.buttonAddTask} onPress={handleTaskAdd}>
          <Image source={require("../../assets/plus.png")} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
