import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import CreatePost from "./src/screens/CreatePost";
import Navigator from "./src/navigation";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Navigator />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
