import React from "react";
import moment from "moment";
import TimeAgo from "react-native-timeago";
import { View, Text } from "react-native";


export default function Timeka({timestamp}) {
  return (
    <View>
      <TimeAgo time={timestamp} />
    </View>
  );
}
