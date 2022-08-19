import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import items from "./items";
const Menu = () => {
  return (
    <View style={styles.menuItems}>
      {items.map((item, i) => (
        <TouchableOpacity key={i}>
          <View style={styles.menuRow}>
            <FontAwesome5 name={item.icon} size={24} color="white" />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle&&(
                <Text style={styles.subTitle}>{item.subTitle}</Text>
              )}
            </View>
            <FontAwesome5 name="chevron-right" size={24} color="#4d4d4e" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Menu;
