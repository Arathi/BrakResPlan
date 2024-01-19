import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Rect, Svg } from "react-native-svg";

type Props = {
  width: number;
  height: number;
  title?: string;
  children?: ReactNode;
};
export default function Spliter({
  width,
  height,
  title,
  children = null,
}: Props) {
  let text: ReactNode = null;
  if (title != undefined) {
    text = <Text style={[styles.text, {fontSize: height*0.5}]}>{title}</Text>
  }
  const radius = height * 0.2;
  return (
    <View style={{
      width,
      height,
    }}>
      <Background width={width} height={height} radius={radius} />
      <View style={{
        width,
        height,
        marginTop: -height,
        justifyContent: "center", 
        alignItems: "center"
      }}>
        { text }
        { children }
      </View>
    </View>
  );
}

type BackgroundProps = {
  width: number;
  height: number;
  radius: number;
  skewAngle?: number;
};
function Background({
  width,
  height,
  radius,
  skewAngle = 10,
}: BackgroundProps) {
  const skewAngleRad = skewAngle * Math.PI / 180;
  const offsetX = Math.tan(skewAngleRad) * height;
  return (
    <Svg style={{width, height,}}>
      <Rect
        fill={"#295C89"}
        x={offsetX}
        y={0}
        width={width-offsetX}
        height={height}
        rx={radius}
        ry={radius}
        transform={[{skewX: `${-skewAngle}`}]}
      />
      <Rect
        fill={"#2C4C72"}
        x={offsetX+radius}
        y={0}
        width={width-4*offsetX-radius}
        height={height}
        transform={[{skewX: `${skewAngle}`}]}
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
  }
});
