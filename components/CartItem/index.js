import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import Menu from "../Menu";
const CartItem = () => {
  const [locked, setLocked] = useState(false);
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="setting" size={26} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>NazMobile</Text>
        <TouchableOpacity>
          <Entypo name="shopping-basket" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.batterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryTitle}>150 mi</Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
      <ScrollView>
        <View style={styles.controls}>
          <View style={styles.controlButton}>
            <TouchableOpacity onPress={() => setLocked((prev) => !prev)}>
              <FontAwesome5
                name={locked ? "lock" : "lock-open"}
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.controlButton}>
            <TouchableOpacity>
              <FontAwesome5 name="fan" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.controlButton}>
            <TouchableOpacity>
              <FontAwesome5 name="key" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Menu />
      </ScrollView>
    </View>
  );
};

export default CartItem;
