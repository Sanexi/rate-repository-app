import { Text, StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        gap: 20
    },
    item: {
        paddingTop: 20,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar style={styles.item} />
            <RepositoryList style={styles.item} />
        </View>
    );
};

export default Main;
