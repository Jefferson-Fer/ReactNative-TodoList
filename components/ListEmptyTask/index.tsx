import { Image, Text, View } from "react-native";

import { styles } from "./styles";

const ListEmptyTask = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/clipboard.png")} />
      <Text style={styles.textTitle}>
        Você ainda não possui tarefas cadastradas
      </Text>
      <Text style={styles.textSubtitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};

export default ListEmptyTask;
