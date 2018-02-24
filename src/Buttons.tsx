import * as React from "react";
import styles from "./Buttons.scss";
import { FontAwesome } from "./FontAwesome";
import { View, TouchableHighlight, Text } from "react-native";
import { titleCase } from "./utils/titleCase";

const colors = ["green", "pink", "dark", "orange", "red", "black"];

const Button = (color: string, index: number) => {
  return (
    <View className={styles.buttonWrapper} key={index}>
      <TouchableHighlight className={styles["button" + titleCase(color)]}>
        <View className={styles.innerWrapper}>
          <View className={styles["icon" + titleCase(color)]}>
            <Text className={styles.iconText}>
              <FontAwesome name="pencil" />
            </Text>
          </View>
          <Text className={styles.buttonText}>淘宝购买</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export const Buttons = () => {
  return <View className={styles.buttonsWrapper}>{colors.map(Button)}</View>;
};
