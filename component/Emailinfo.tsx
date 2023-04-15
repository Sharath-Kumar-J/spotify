import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Emailinform = ({ route }) => {
    const { params } = route;
    const { item1 } = params;
    const { title, body, } = item1;
    return (
        <View>
            <Text style={{ fontSize: 25, }}>{title}</Text>
            <Text style={{ fontSize: 15, }}>{body}</Text>

        </View>
    )
}

export default Emailinform;

const styles = StyleSheet.create({})
