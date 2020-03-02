import * as React from 'react';
import {Image, Text, View} from 'react-native';
import avatar from './images/avatar.png';
import bg from './images/iceland.jpg';
import styles from './ProfileCard.css';

export const ProfileCard = () => {
  return (
    <View className={styles.profileOuter}>
      <View className={styles.profileWrapper}>
        <Image
          source={bg}
          resizeMode="cover"
          className={styles.backgroundImg}
        />
        <View className={styles.body}>
          <Image source={avatar} className={styles.profileImg} />
          <View className={styles.nameWrapper}>
            <Text className={styles.name}>Dave Gamache</Text>
          </View>
          <View className={styles.descriptionWrapper}>
            <Text className={styles.description}>
              I wish i was a little bit taller, wish i was a baller, wish i had
              a girl… also.
            </Text>
          </View>
          <View className={styles.stats}>
            <View className={styles.statsLeft}>
              <Text className={styles.statsText}>Friends</Text>
              <Text
                className={[styles.statsText, styles.statsTextBold].join(' ')}>
                12M
              </Text>
            </View>
            <View className={styles.statsRight}>
              <Text className={styles.statsText}>Enemies</Text>
              <Text className={`${styles.statsText} ${styles.statsTextBold}`}>
                1
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
