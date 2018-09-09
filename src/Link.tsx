import * as React from "react";
import { Linking, Text, View } from "react-native";
import styles from "./Link.css";

interface LinkProps {
  description: string;
  url: string;
}

export const Link = ({ description, url }: LinkProps) => {
  return (
    <View className={styles.description}>
      <Text className={styles.descriptionText}>
        {description + ":\n"}
        <Text
          className={styles.descriptionLink}
          onPress={() => Linking.openURL(url)}
        >
          {url}
        </Text>
      </Text>
    </View>
  );
};
