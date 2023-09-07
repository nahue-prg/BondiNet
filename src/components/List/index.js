import { View, Text, FlatList } from "react-native";
import React from "react";
import Item from "../Item";
import styles from "./styles";

const List = ({ data, selectPlace }) => {
  return (
    <View style={styles.listSection}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Lista de paquetes de viaje</Text>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item data={item} selectPlace={selectPlace} />
          )}
        />
      </View>
    </View>
  );
};

export default List;
