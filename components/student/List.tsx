import { View, Text, StyleSheet } from "react-native";
import { Row } from "../common/Grid";
import Icon from "./Icon";

type Props = {
  width?: number;
};
export default function List({
  width = 6
}: Props) {
  const containerWidth = 136 * width + 8;
  let scale = 1; //(360-16) / containerWidth;

  const owned = [
    <Icon key={10000} id={10000}></Icon>,
    <Icon key={10001} id={10001}></Icon>,
    <Icon key={10002} id={10002}></Icon>,
    <Icon key={10003} id={10003}></Icon>,
    <Icon key={10004} id={10004}></Icon>,
    <Icon key={10005} id={10005}></Icon>,
    <Icon key={10006} id={10006}></Icon>,
  ];
  const unowned: React.ReactNode[] = [
    <Icon key={10010} id={10010}></Icon>,
    <Icon key={10011} id={10011}></Icon>,
    <Icon key={10012} id={10012}></Icon>,
    <Icon key={10013} id={10013}></Icon>,
    <Icon key={10014} id={10014}></Icon>,
    <Icon key={10015} id={10015}></Icon>,
    <Icon key={10016} id={10016}></Icon>,
  ];
  return (
    <View style={[styles.list, {
      width: containerWidth,
      transform: [{scale: scale}],
    }]}>
      <Row style={styles.group}>{owned}</Row>
      <Spliter />
      <Row style={styles.group}>{unowned}</Row>
    </View>
  );
}

function Spliter() {
  return (
    <View style={styles.spliterContainer}>
      <View style={styles.spliterSkew}></View>
      <View style={styles.spliterTextBox}>
        <Text style={styles.spliterText}>未拥有</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#F3FBFD",
    padding: 4,
  },
  group: {
    flexWrap: "wrap",
  },
  spliterContainer: {
    flexDirection: "column",
    width: "100%",
    height: 28,
    margin: 8,
    paddingRight: 16,
  },
  spliterSkew: {
    backgroundColor: "#2C4C72",
    width: "100%",
    height: 28,
    transform: [{skewX: '-10deg'}],
    borderRadius: 8,
  },
  spliterTextBox: {
    height: 28,
    margin: -28,
    justifyContent: "center",
    alignItems: "center",
  },
  spliterText: {
    color: "white",
    fontWeight: "bold",
  }
});
