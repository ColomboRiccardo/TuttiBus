import {Text, View, StyleSheet, TextInput, Pressable, Modal, FlatList} from "react-native";
import {Link} from "expo-router";
import {SetStateAction, useState} from "react";
import {Ionicons} from "@expo/vector-icons";

export default function Index() {
    const [searchBus, setSearchBus] = useState("")
    const [searchLocation, setSearchLocation] = useState("")
    const [searchHour, setSearchHour] = useState<SetStateAction<any>>(0)
    const [searchMinutes, setSearchMinutes] = useState<SetStateAction<any>>(0)
    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
        setModalOpen(true)
    }

    return (
        <View
            style={styles.container}
        >
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={"Cerca autobus..."} value={searchBus}
                           onChangeText={setSearchBus}></TextInput>
                <Ionicons style={styles.searchIcon} name={"search"}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Da dove vuoi partire?</Text>
                <TextInput style={styles.input} placeholder={"Inserisci la tua posizione di partenza"}
                           value={searchLocation}
                           onChangeText={setSearchLocation}></TextInput>
                <Ionicons style={styles.locationIcon} name={"location"}/>
            </View>
            <View style={styles.timeSelectSection}>
                <Text>Quando vuoi partire?</Text>
                <View style={styles.timeSelectContainer}>
                    <TextInput style={styles.timeSelectInput} onChangeText={setSearchHour}
                               value={searchHour}></TextInput>
                    <Text style={{fontSize: 50, fontWeight: "bold"}}>:</Text>
                    <TextInput style={styles.timeSelectInput} onChangeText={setSearchMinutes}
                               value={searchMinutes}></TextInput>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 16,
                    alignItems: "center"
                }}>
                    <Ionicons name="time" size={24}></Ionicons>
                    <View style={{flexDirection: "row", gap: 16}}>
                        <Pressable style={styles.formButton}>
                            <Text>Ok</Text>
                        </Pressable>
                        <Pressable style={styles.formButton}>
                            <Text>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.resultContainer}>
                <Text style={{alignSelf: "flex-start", marginBottom: 4}}>Ecco i risultati che abbiamo trovato:</Text>
                <Pressable style={styles.resultItem} onPress={handleModal}>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: "medium"}}>Piazza Eroi Sanremesi - 20.00</Text>
                        <Text style={{fontWeight: "ultralight", fontSize: 12, marginTop: 2}}>Bordighera - Arma di
                            Taggia</Text>
                        {modalOpen && <BusModal setModalOpen={setModalOpen}/>}
                    </View>
                    <Ionicons name="arrow-forward" size={20}/>
                </Pressable>
                <Pressable style={styles.resultItem}>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: "medium"}}>Piazza Eroi Sanremesi - 20.00</Text>
                        <Text style={{fontWeight: "ultralight", fontSize: 12, marginTop: 2}}>Bordighera - Arma di
                            Taggia</Text>
                    </View>
                    <Ionicons name="arrow-forward" size={20}/>
                </Pressable>
                <Pressable style={styles.resultItem}>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: "medium"}}>Piazza Eroi Sanremesi - 20.00</Text>
                        <Text style={{fontWeight: "ultralight", fontSize: 12, marginTop: 2}}>Bordighera - Arma di
                            Taggia</Text>
                    </View>
                    <Ionicons name="arrow-forward" size={20}/>
                </Pressable>
            </View>
        </View>
    );
}

const BusModal = ({setModalOpen}: { setModalOpen: (value: SetStateAction<boolean>) => void }) => {
    return (
        <Modal>
            <View style={{width: "100%", padding: 16}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Pressable onPress={e => setModalOpen(false)}>
                        <Ionicons name="arrow-back" size={24}/>
                    </Pressable>
                    <Text style={{marginLeft: 12, fontSize: 20}}>Modal</Text>
                </View>
                <View style={{marginTop: 24}}>
                    <Text style={{fontSize: 24, fontWeight: "medium"}}>Piazza Eroi Sanremesi - 20.00</Text>
                    <Text style={{fontWeight: "ultralight", fontSize: 16, marginTop: 2}}>Bordighera - Arma di
                        Taggia</Text>
                </View>
                <View style={{width: "100%", marginTop: 16, height: 300, backgroundColor: "grey"}}></View>
                <View>
                    <Text style={{marginTop: 16, marginBottom: 8, fontSize:18}}>Fermate:</Text>
                    <FlatList data={[
                        {key: "Bordighera"},
                        {key: "Ospedaletti"},
                        {key: "Sanremo"},
                        {key: "Imperia"},
                    ]}
                              renderItem={({item}) =>
                                  <View style={styles.resultItem}>
                                      <Text style={{}}>{item.key}</Text>
                                      <Text>20.00</Text>
                                  </View>
                              }/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#252292e",
        alignItems: "center",
        padding: 12,
        gap: 12
    },
    text: {
        color: "#000"
    },
    button: {
        color: "#000"
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        padding: 8
    },
    inputContainer: {
        width: "100%",
        marginBottom: 10,
        marginTop: 10
    },
    searchIcon: {
        position: "absolute",
        right: 12,
        top: "50%",
        transform: [{translateY: "-50%"}]
    },
    locationIcon: {
        position: "absolute",
        right: 12,
        top: "50%",
    },
    label: {
        color: "#000",
        marginBottom: 0
    },
    timeSelectSection: {
        width: "100%",
        backgroundColor: "lightgrey",
        padding: 12
    },
    timeSelectContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        alignSelf: "center",
        marginTop: 12
    },
    timeSelectInput: {
        fontSize: 50,
        width: "45%",
        backgroundColor: "white",
        textAlign: "center",
        padding: 4
    },
    formButton: {
        fontSize: 24,
        padding: 8,
        backgroundColor: "white"
    },
    resultContainer: {
        alignItems: "center",
        width: "100%"
    },
    resultItem: {
        width: "100%",
        backgroundColor: "white",
        padding: 12,
        borderColor: "grey",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});