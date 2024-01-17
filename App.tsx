import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StudentList from './components/student/List';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <StudentList />
        <StatusBar style="auto" />
      </View>
    </RecoilRoot>
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
