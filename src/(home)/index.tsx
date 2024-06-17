import { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, Text, View } from "react-native";

import Header from "../../components/Header";
import ListEmptyTask from "../../components/ListEmptyTask";
import ListTasks from "../../components/ListTasks";
import { styles } from "./styles";

export interface Tasks {
  name: string;
  complete: boolean;
}

const Home = () => {
  const [newTask, setNewTask] = useState<Tasks>({ name: "", complete: false });
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const [countTasksCreate, setCountTasksCreate] = useState(0);
  const [countTasksComplete, setCountTasksComplete] = useState(0);

  const handleTaskAdd = (task: string) => {
    if (task !== "") {
      setNewTask({ name: task, complete: false });
    }
  };

  const handleTaskRemove = (taskRemove: Tasks) => {
    setTasks(tasks.filter((task) => task.name !== taskRemove.name));

    setCountTasksCreate(countTasksCreate - 1);
    if (taskRemove.complete) {
      setCountTasksComplete(countTasksComplete - 1);
    }
  };

  const handleTaskChecked = (taskChecked: Tasks) => {
    if (taskChecked.complete) {
      setCountTasksComplete(countTasksComplete - 1);
    } else {
      setCountTasksComplete(countTasksComplete + 1);
    }

    setTasks(
      tasks.map((task) => {
        if (task.name === taskChecked.name) {
          if (taskChecked.complete === true) {
            return { ...task, complete: false };
          }
          return { ...task, complete: true };
        }
        return { ...task };
      }),
    );
  };

  const renderTask = ({ item }: { item: Tasks }) => (
    <ListTasks
      key={item.name}
      task={item}
      onTaskRemove={handleTaskRemove}
      onTaskChecked={handleTaskChecked}
    />
  );

  useEffect(() => {
    if (newTask.name !== "") {
      if (tasks.some((task) => task.name === newTask.name)) {
        return Alert.alert("Error", "Tarefa já existe");
      }

      setTasks((state) => [...state, newTask!]);
      setNewTask({ name: "", complete: false });
      setCountTasksCreate(countTasksCreate + 1);
    }
  }, [newTask]);

  return (
    <View style={styles.container}>
      <Header TaskAdd={handleTaskAdd} />

      <View style={styles.containerTasks}>
        <View style={styles.headerList}>
          <View style={styles.countTasks}>
            <Text style={styles.textCountCreate}>Criadas</Text>
            <Text style={styles.textCount}>{countTasksCreate}</Text>
          </View>

          <View style={styles.countTasks}>
            <Text style={styles.textCountComplete}>Concluídas</Text>
            <Text style={styles.textCount}>{countTasksComplete}</Text>
          </View>
        </View>

        <View style={styles.border} />

        <SafeAreaView style={{ maxHeight: 480 }}>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.name}
            renderItem={renderTask}
            ListEmptyComponent={ListEmptyTask}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Home;
