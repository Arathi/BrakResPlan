import { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import StudentList from './components/student/List';
import StudentIcon from './components/student/Icon';
import { useDimensionsStore } from './stores/DimensionsStore';
import Spliter from './components/student/Spliter';

export default function App() {
  const dimensions = useDimensionsStore();

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({window, screen}) => {
      console.debug("窗口大小：", window);
      dimensions.update(window, screen);
    });
    return () => {
      subscription?.remove();
    };
  });

  // <StudentList width={3} />
  // <Spliter height={32} width={360} title={"未持有"} />
  return (
    <View style={styles.container}>
      <StudentList width={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
