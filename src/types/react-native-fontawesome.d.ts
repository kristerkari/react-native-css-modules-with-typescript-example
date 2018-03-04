declare module "react-native-fontawesome" {
  import { TextProperties } from "react-native";
  export const Icons: { [key: string]: string };
  const Icon: React.ComponentClass<TextProperties>;
  export default Icon;
}
