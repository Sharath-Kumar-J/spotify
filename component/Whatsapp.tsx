import { StyleSheet, Text, FlatList, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import UsewhatsappAPIdata from '../hooks/Whatsappdata';


const Whatsappscreen = ({ navigation }) => {
    const { data } = UsewhatsappAPIdata();
    const renderItemAPI = ({ item }) => {
        return (
            <View>
                <Text style={styles.whatsapptext}>
                    {item.email}
                </Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <View >
                <View style={styles.headercontainer}>
                    <View >
                        <Text style={styles.headertext}>
                            Whatsapp
                        </Text>
                    </View>

                    <View style={styles.icons}>
                        <Feather style={{ paddingRight: 25, }}
                            name='camera' color='#fff' size={30}
                        />
                        <Feather style={{ paddingRight: 15, }}
                            name='search' color='#fff' size={30}
                        />
                        <Feather
                            name='more-vertical' color='#fff' size={30}
                        />
                    </View>

                </View>

                <View style={styles.headercontainertwo}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 5, }}> Chats</Text>
                    <TouchableOpacity
                    activeOpacity={0.7}
                    onPress = {() => {navigation.navigate(" Statusscreen ")}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', }}> Status</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    activeOpacity={0.7}
                    onPress = {() => {navigation.navigate(" Spotify")}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingRight: 10, }}> Calls</Text>
                    </TouchableOpacity>

                </View>
           
                <View style = { styles.whatsappdata}>
                <FlatList
                    data={data.slice(0, 30)}
                    renderItem={renderItemAPI}
                    keyExtractor={item => item.id}
                />
                 </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headercontainer: {
        flexDirection: 'row',
        alignContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#008b8b',
        borderColor: '#008b8b',
        justifyContent: 'space-between',
        paddingBottom: 30,

    },
    headertext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 7,


    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 15,

    },
    headercontainertwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        backgroundColor: '#008b8b',
        borderColor: '#008b8b',
        paddingBottom: 5,
    },
    whatsapptext: {
        fontSize: 20,
        color: 'black',
        borderWidth: 1,
        padding:10,
        borderTopColor:'white',
        borderColor:'white',
    },

    whatsappdata:{
        margin :0,
    },

});

export default Whatsappscreen;