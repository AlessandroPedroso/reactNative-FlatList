import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Pessoa from "./src/Pessoa";

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: "1",
      nome: "Alessandro",
      idade: 50,
      email: "alessandropedrosoti@gmail.com",
    },
    {
      id: "2",
      nome: "Eduardo",
      idade: 10,
      email: "eduardo@gmail.com",
    },
    {
      id: "3",
      nome: "Taís",
      idade: 10,
      email: "Taís@gmail.com",
    },
    {
      id: "4",
      nome: "Lúcia",
      idade: 50,
      email: "lucia@gmail.com",
    },
    {
      id: "5",
      nome: "José",
      idade: 50,
      email: "jose@gmail.com",
    },
  ]);
  return (
    //para usar uma key no FlatList usar o keyExtractor={(item)=> item._id}
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={feed}
        renderItem={({ item }) => <Pessoa data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
  },
});
