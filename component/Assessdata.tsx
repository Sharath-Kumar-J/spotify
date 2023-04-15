import { StyleSheet, Text, FlatList, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Useassessdata from '../hooks/Assessmentdata';

const Assessdatascreen = () => {
    const { data } = Useassessdata();
    const renderItemAPI = ({ item }) => {
        return (
            <View>
                <Text style={{ fontSize: 20, color: 'black', margin: 1, }}>{item.title}</Text>
            </View>

        );
    };
    return (

        <View>
            <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black', margin: 2, }}>
                    API Data
                </Text>
            </View>


            <FlatList

                data={data.slice(0, 50)}
                renderItem={renderItemAPI}
                keyExtractor={item => item.id}
            />
        </View>


    );
};
export default Assessdatascreen;