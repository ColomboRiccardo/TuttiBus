import {View, StyleSheet, Text} from "react-native";

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is the settings page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252292e",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default SettingsScreen;