import React from "react";
import { FlatList, View, Text, Button, StyleSheet } from "react-native";

const CustomFlatList = ({ data, onRemoveItem }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <View style={styles.item}>
          <Text>{item}</Text>
          <Button title="Remover" onPress={() => onRemoveItem(index)} />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default CustomFlatList;
