import * as React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { ProfileCard } from "./ProfileCard";
import { Buttons } from "./Buttons";
import { Link } from "./Link";
import styles from "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView className={styles.wrapper}>
          <Link
            description="Profile card from"
            url="https://themes.getbootstrap.com/products/application"
          />
          <ProfileCard />
          <Link
            description="Buttons from"
            url="https://codepen.io/coolzilj/pen/ImlEG"
          />
          <Buttons />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
