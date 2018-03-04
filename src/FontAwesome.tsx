import * as React from "react";
import Fa from "react-fontawesome";

interface FontAwesomeProps {
  name: string;
}

export const FontAwesome = (props: FontAwesomeProps) => {
  return <Fa name={props.name} />;
};
