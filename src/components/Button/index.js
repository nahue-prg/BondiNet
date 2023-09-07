import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const Button = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
