import { Dimensions, StyleSheet, Text, View } from 'react-native';
import StudentList from './components/student/List';
import { useEffect } from 'react';
import { useDimensionsStore } from './stores/DimensionsStore';

export default function App() {
  const dimensions = useDimensionsStore();

  useEffect(() => {
    // 监听窗口大小变化
    const subscription = Dimensions.addEventListener("change", ({window, screen}) => {
      console.debug("窗口大小：", window);
      dimensions.update(window, screen);
    });
    return () => {
      subscription?.remove();
    };
  });

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
