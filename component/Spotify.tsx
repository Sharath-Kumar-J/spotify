
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
    Alert,
    Image,
    FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import TrendingAPIdata from '../hooks/Trendingdata';
import EmailAPIdata from '../hooks/Emaildata';
import { Navigation } from 'react-native-feather';

const SpotifyScreen = ( { navigation }) => {
    const { data } = TrendingAPIdata();
    const { data1 } = EmailAPIdata();
    const renderItemAPI = ({ item }) => {
        return (

            <View style={styles.trendingdata}>
                <TouchableOpacity
                activeOpacity={0.7}
                onPress = {()=>{navigation.navigate( " Spotifyinform", {item:item})}}
                >
                <Image style={{ width: 110, height: 150, }}
                    source={{ uri: item.url }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center', }}>

                    {item.id}

                </Text>
                </TouchableOpacity>
            </View>
        );
    };


    const renderemailItemAPI = ({ item }) => {
        return (

            <View style= {styles.emailcontainer}>
                <TouchableOpacity
                activeOpacity={0.7}
                onPress = {()=>{navigation.navigate( " Emailinform",{item1:item});}}
                >
                <Text style ={styles.Emailtext}>

                    {item.title}

                </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <View>
                    <Text style={styles.headertext}>
                        Jio saavn
                    </Text>
                </View>
                <View style={styles.headericonswrapper}>
                    <Feather style={styles.headericons}
                        onPress={() => (Alert.alert('Trending music'))}
                        name='music' color='#000' size={40}
                    />
                    <Feather style={styles.headericons}

                        onPress={() => (Alert.alert(' search the song'))}
                        name='search' color='#000' size={40}
                    />


                </View>

            </View>

            <View >


                <Text style={styles.trendingtext}>
                    Trending</Text>
            </View>
            <View>
                <FlatList

                    data={data.slice(0, 10)}
                    renderItem={renderItemAPI}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

            </View>

            <View>

                <View>
                    <Text  style={styles.emailheader} >
                        Emais
                    </Text>
                </View>

                <View>

                
                 <FlatList

                  data={data1.slice(0, 50)}
                  renderItem={renderemailItemAPI}
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
        backgroundColor: 'skyblue',

    },
    headercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
        margin: 5,
        borderRadius: 10,

    },
    headertext: {
        fontSize: 25,
        color: '#000'
    },

    headericonswrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    headericons: {
        paddingRight: 10,
    },

    trendingdata: {
        margin: 5,


    },
    trendingtext: {
        fontSize: 25,
        margin: 5,
        color: 'black',
        fontWeight:'bold',
    },
    Emailtext: {
        fontSize: 20,
        margin: 5,
        color: 'black',
        marginTop:5,
       

    },
    emailheader:{
        fontSize: 25,
        margin: 5,
        color: 'black',
        fontWeight:'bold',
    },

    emailcontainer:{

        borderWidth: 1,
    },

},


);
export default SpotifyScreen;
