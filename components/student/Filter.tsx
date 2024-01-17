import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, View, Text } from "react-native";

type Props = {};
export default function Filter({}: Props) {
  return (
    <View style={styles.filter}>
      <View style={styles.group}>
        <ToggleButton />
      </View>
    </View>
  );
}

type ToggleButtonProps = {
  title?: string;
  children?: React.ReactNode;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
};
function ToggleButton({
  title,
  children,
  onPress,
}: ToggleButtonProps) {
  let content: React.ReactNode = null;
  if (React.Children.count(children)) {
    content = children;
  }
  else if (title != undefined) {
    content = <Text>{title}</Text>;
  }
  return (
    <Pressable onPress={onPress}>
      <View>
        { content }
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  filter: {
    flexDirection: "row",
  },
  group: {
    flexDirection: "row",
  },
});
