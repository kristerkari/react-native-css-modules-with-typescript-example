import * as React from "react";
import Fa, { Icons } from "react-native-fontawesome";
import { Text } from "react-native";
import { camelCase } from "./utils/camelCase";

interface FontAwesomeProps {
  name: string;
}

export const FontAwesome = (props: FontAwesomeProps) => {
  return (
    <Text>
      <Fa>{Icons[camelCase(props.name)]}</Fa>
    </Text>
  );
};
