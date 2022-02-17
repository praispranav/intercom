import React from "react";
import { mediaDevices } from "react-native-webrtc";

export default class RTCUtils {
  static async getStream() {
    let isFront = true;
    const sourceInfos = await mediaDevices.enumerateDevices();
    console.log(sourceInfos);
    let videoSourceId;
    for (let i = 0; i < sourceInfos.length; i++) {
      const sourceInfo = sourceInfos[i];
      if (
        sourceInfo.kind == "videoinput" &&
        sourceInfo.facing == (isFront ? "front" : "environment")
      ) {
        videoSourceId = sourceInfo.deviceId;
      }
    }
    const stream = await mediaDevices
      .getUserMedia({
        audio: true, video: false
        // video: {
        //   width: 640,
        //   height: 480,
        //   frameRate: 30,
        //   facingMode: (isFront ? "user" : "environment"),
        //   deviceId: videoSourceId
        // }
      })
    
      if(typeof stream !== 'boolean') return stream
      else return null 
  }
}
