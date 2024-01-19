import { View, Text, StyleSheet, ScrollView } from "react-native";
import Svg, {G, Rect, Text as SvgText} from "react-native-svg";
import { useDimensionsStore } from "../../stores/DimensionsStore";
import { Row } from "../../components/common/Grid";
import Icon from "./Icon";

type Props = {
  width?: number;
  height?: number;
};
export default function List({
  width = 6,
  height = 3,
}: Props) {
  const containerWidth = 136 * width + 8;
  const containerHeight = 136 * height + 8;
  const margin = 16;
  const windowSize = useDimensionsStore((state) => state.window);

  let scale = (windowSize.width-margin) / containerWidth;
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

  // <View style={[styles.list, {
  //   width: containerWidth,
  //   transform: [{scale: scale}],
  // }]}>
  // </View>

  return (
    <ScrollView style={{
      width: containerWidth,
      height: containerHeight,
      transform: [{scale}]
    }}>
      <Row style={styles.group}>{owned}</Row>
      <Spliter width={containerWidth} />
      <Row style={styles.group}>{unowned}</Row>
    </ScrollView>
  );
}

function Spliter({
  width = 136 * 6,
  height = 28,
  radius = 8,
}) {
  return (
    <View style={[styles.spliterContainer, {width: width}]}>
      <Svg style={{zIndex: 1}}>
        <G fill={"#295C89"}>
          <Rect
            x={8}
            y={0}
            width={width-30}
            height={height}
            rx={radius}
            ry={radius}
            transform={[{skewX: "-10"}]}
          />
        </G>
        <G fill={"#2C4C72"}>
          <Rect
            x={16}
            y={0}
            width={width-60}
            height={height}
            transform={[{skewX: "10"}]}
          />
        </G>
        <G fill={"#ffffff"}>
          <SvgText
            x={170}
            y={20}
            fontSize={18}
          >
            未持有
          </SvgText>
        </G>
      </Svg>
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
