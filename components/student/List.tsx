import { StyleSheet, ScrollView } from "react-native";
import { useDimensionsStore } from "../../stores/DimensionsStore";
import { Row } from "../../components/common/Grid";
import Icon, { IconWidth, IconHeight } from "./Icon";
import Spliter from "./Spliter";

type Props = {
  width?: number;
  height?: number;
  padding?: number;
};
export default function List({
  width = 6,
  height = 3,
  padding = 4,
}: Props) {
  const windowSize = useDimensionsStore((state) => state.window);

  const containerWidth = IconWidth*width + 2*padding;
  const containerHeight = IconHeight*height + 2*padding;

  let scale = (windowSize.width-2*padding) / containerWidth;
  if (scale > 1) {
    scale = 1;
  }

  const owned = [
    <Icon key={10000} id={10000}></Icon>,
    <Icon key={10001} id={10001}></Icon>,
    <Icon key={10002} id={10002}></Icon>,
    <Icon key={10003} id={10003}></Icon>,
    <Icon key={10004} id={10004}></Icon>,
    <Icon key={10005} id={10005}></Icon>,
    <Icon key={10000} id={10000}></Icon>,
    <Icon key={10001} id={10001}></Icon>,
    <Icon key={10002} id={10002}></Icon>,
    <Icon key={10003} id={10003}></Icon>,
    <Icon key={10004} id={10004}></Icon>,
    <Icon key={10005} id={10005}></Icon>,
    <Icon key={10000} id={10000}></Icon>,
    <Icon key={10001} id={10001}></Icon>,
    <Icon key={10002} id={10002}></Icon>,
    <Icon key={10003} id={10003}></Icon>,
    <Icon key={10004} id={10004}></Icon>,
    <Icon key={10005} id={10005}></Icon>,
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
    <ScrollView style={{
      width: containerWidth,
      height: containerHeight,
      transform: [{scale}]
    }}>
      <Row style={styles.group}>{owned}</Row>
      <Spliter width={containerWidth-2*padding} height={28} title={"未持有"} />
      <Row style={styles.group}>{unowned}</Row>
    </ScrollView>
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
    height: 28,
    margin: 8,
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
