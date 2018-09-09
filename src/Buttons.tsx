import * as React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import styles from "./Buttons.scss";
import { FontAwesome } from "./FontAwesome";
import { titleCase } from "./utils/titleCase";

const colors = ["green", "pink", "dark", "orange", "red", "black"];
const stylesIndexSignature: { [index: string]: string } = styles;

const Button = (color: string, index: number) => {
  const button = "button" + titleCase(color);
  const icon = "icon" + titleCase(color);
  return (
    <View className={styles.buttonWrapper} key={index}>
      <TouchableHighlight className={stylesIndexSignature[button]}>
        <View className={styles.innerWrapper}>
          <View className={stylesIndexSignature[icon]}>
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
