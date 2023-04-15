
import React, { type PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    TextInput,
    Button,
} from 'react-native';

const Assesshomescreen = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState("");
    return (
        <View>
            <View>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Enter ID"
                    
                        />
                </SafeAreaView>
            </View>

            <View style ={styles.button}>
                <Button
                    title='Search'
                    onPress={() => { navigation.navigate(" Assessdatascreen ") }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button:{
        paddingTop:5,
        paddingRight:90,
        paddingLeft:90,

    },
});

export default Assesshomescreen;


