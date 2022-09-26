import { Pressable, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e"
  },
  barText: {
    color: "white",
    fontsize: 24,
    margin: 20
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <Pressable>
            <Text fontWeight="bold" style={styles.barText}>Repositories</Text>
        </Pressable>
    </View>
  );
};

export default AppBar;
