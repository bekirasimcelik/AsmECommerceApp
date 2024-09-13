import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const Header = ({title, leftIcon, rightIcon, onLeftPress, onRightPress}) => (
  <View style={styles.container}>
    {leftIcon && (
      <Icon
        name={leftIcon}
        size={28}
        color="#fff"
        onPress={onLeftPress}
        containerStyle={styles.icon}
      />
    )}
    <Text style={styles.title}>{title}</Text>
    {rightIcon && (
      <Icon
        name={rightIcon}
        size={28}
        color="#fff"
        onPress={onRightPress}
        containerStyle={styles.icon}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#0a74da',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  icon: {
    paddingHorizontal: 10,
  },
});

export default Header;
