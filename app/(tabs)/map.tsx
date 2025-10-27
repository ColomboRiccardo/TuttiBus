import {View, StyleSheet, Text} from "react-native";

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is the map page</Text>
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

export default MapScreen;