import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from './Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  hangup: () => void;
  join: () => void;
}
export default function GettingCall(props: Props) {
  return (
    <View style={styles.container}>
      {/* <Image source={require('../img/Caller.jpg')} style={styles.image} /> */}
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 140,
            backgroundColor: 'rgba(0,0,0,0.05)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons name="account" size={30} />
        </View>

        <Text>Alok is Calling You.</Text>
      </View>
      <View style={styles.bContainer}>
        <Button
          iconName="phone"
          backgroundColor="green"
          onPress={props.join}
          style={{marginRight: 30}}
        />
        <Button
          iconName="phone"
          backgroundColor="red"
          onPress={props.hangup}
          style={{marginLeft: 30}}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bContainer: {
    flexDirection: 'row',
    bottom: 30,
  },
});
