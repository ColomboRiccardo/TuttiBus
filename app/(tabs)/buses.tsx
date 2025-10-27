import {View, StyleSheet, Text} from "react-native";

const BusesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is the buses page</Text>
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

export default BusesScreen;