import React, { ReactNode } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { ViewStyleProp } from './styles';

type Props = {
  width: number;
  gutter?: number;
  style?: ViewStyleProp;
  children?: ReactNode;
};
export default function Grid({
  width,
  gutter = 0,
  style = {},
  children = [],
}: Props) {
  const rows: ReactNode[] = [];
  if (React.Children.count(children)) {
    let cells: ReactNode[] = [];
    React.Children.forEach(children, (child, index) => {
      cells.push(
        <Item>{child}</Item>
      );
      if (index > 0 && index % width == 0) {
        rows.push(
          <Row>{cells}</Row>
        );
        cells = [];
      }
    });
    if (cells.length > 0) {
      rows.push(
        <Row>{cells}</Row>
      );
      cells = [];
    }
  }

  return (
    <View style={[styles.grid]}>
      { rows }
    </View>
  );
}

type RowProps = {
  gutter?: number;
  style?: ViewStyleProp;
  children?: ReactNode;
};
export function Row({
  gutter = 0,
  style = {},
  children = [],
}: RowProps) {
  const items: ReactNode[] = [];
  if (React.Children.count(children)) {
    React.Children.forEach(children, (child, index) => {
      items.push(
        <Item key={index}>{child}</Item>
      );
    });
  }

  return (
    <View style={[styles.row, style]}>
      { items }
    </View>
  );
}

type ColumnProps = {
  flex?: number;
  style?: ViewStyleProp;
  children?: ReactNode;
};
export function Column({
  flex,
  style = {},
  children = [],
}: ColumnProps) {
  const items: ReactNode[] = [];
  if (React.Children.count(children)) {
    React.Children.forEach(children, (child, index) => {
      items.push(
        <Item key={index}>{child}</Item>
      );
    });
  }

  return (
    <View style={[styles.column, style]}>
      { items }
    </View>
  );
}

type ItemProps = {
  style?: ViewStyleProp;
  children?: ReactNode;
};
function Item({
  style = {},
  children = []
}: ItemProps) {
  return (
    <View style={[styles.item, style]}>
      { children }
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  item: {
  },
});
