import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MediaStream, RTCView } from 'react-native-webrtc';
import Button from './Button';

interface Props {
  hangup: () => void;
  localStream?: MediaStream | null;
  remoteStream?: MediaStream | null;
}

function ButtonContainer(props: Props) {
  return (
    <View style={styles.bContainer}>
      <Button iconName="phone" backgroundColor="red" onPress={props.hangup} />
    </View>
  );
}
export default function Video(props: Props) {
  // On call we will just display the local stream
  if (props.localStream && !props.remoteStream) {
    return (
      <View style={styles.container}>
        <RTCView
          streamURL={props.localStream.toURL()}
          objectFit={'cover'}
          style={styles.video}
        />
              <View style={{ position:'absolute', top: 0, height: "100%", width: "100%", backgroundColor: 'rgba(0,0,0,0.05)', display:"flex", justifyContent:"center", alignItems:"center" }}>
          <Text style={{ 
            color: 'black'
          }}>Calling...</Text>
        </View>
        <ButtonContainer hangup={props.hangup} />
      </View>
    );
  }
  // Once the call is connected we will display
  // local Stream on top of remote stream
  if (props.localStream && props.remoteStream) {
    return (
      <View style={styles.container}>
        <RTCView
          streamURL={props.remoteStream.toURL()}
          objectFit={'cover'}
          style={styles.video}
        />
        <RTCView
          streamURL={props.localStream.toURL()}
          objectFit={'cover'}
          style={styles.videoLocal}
        />
        
        <View style={{ position:'absolute', top: 0, height: "100%", width: "100%", backgroundColor: 'rgba(0,0,0,0.05)', display:"flex", justifyContent:"center", alignItems:"center" }}>
          <Text style={{ 
            color: 'black'
          }}>Call Connected</Text>
        </View>

        <ButtonContainer hangup={props.hangup} />
      </View>
    );
  }
  return <ButtonContainer hangup={props.hangup} />;
}
const styles = StyleSheet.create({
  bContainer: {
    flexDirection: 'row',
    bottom: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    width: '0%',
    height: '0%',
  },
  videoLocal: {
    position: 'absolute',
    width: 0,
    height:0,
    top: 0,
    left: 20,
    elevation: 10,
  },
});
