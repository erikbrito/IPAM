import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, setItems } from "../redux/Actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import FlatList from "../components/FlatList";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const loadItems = async () => {
      try {
        const savedItems = await AsyncStorage.getItem("items");
        if (savedItems) {
          dispatch(setItems(JSON.parse(savedItems)));
        }
      } catch (error) {
        console.error("Failed to load items:", error);
      }
    };

    loadItems();
  }, [dispatch]);

  useEffect(() => {
    const saveItems = async () => {
      try {
        await AsyncStorage.setItem("items", JSON.stringify(items));
      } catch (error) {
        console.error("Failed to save items:", error);
      }
    };

    saveItems();
  }, [items]);

  const handleAddItem = () => {
    if (newItem.trim()) {
      dispatch(addItem(newItem));
      setNewItem("");
    }
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IPAM TESTE</Text>
      <TextInput
        value={newItem}
        onChangeText={setNewItem}
        placeholder="Escreva aqui o nome do Item"
      />
      <Button title="Adicionar Item" onPress={handleAddItem} />
      <FlatList data={items} onRemoveItem={handleRemoveItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
});

export default HomeScreen;
